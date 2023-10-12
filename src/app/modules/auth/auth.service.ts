import httpStatus from 'http-status'
import config from '../../../config'
import ApiError from '../../../error/ApiError'
import { createToken, verifyToken } from '../../../helper/jwtHelper'
import { iUser } from '../user/user.interface'
import User from '../user/user.model'
import { iAuth, iLoginReqData, iRefreshTokenReturn } from './auth.interface'

export const registerUserDB = async (data: iUser): Promise<Partial<iUser>> => {
  const result = await User.create(data)
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { password, ...restData } = result.toObject()

  return restData
}

export const loginUserDB = async (data: iLoginReqData): Promise<iAuth | null> => {
  const { username, password } = data

  // username or email verification
  const result = await User.findOne(
    {
      $or: [{ 'email.address': username }, { username: username }]
    },
    {
      _id: 1,
      username: 1,
      name: 1,
      email: 1,
      number: 1,
      gender: 1,
      password: 1,
      role: 1,
      status: 1,
      about: 1,
      education: 1
    }
  )
  if (!result) throw new ApiError(httpStatus.UNAUTHORIZED, 'Unauthorized access.')

  // password verification
  const isPasswordValid = await User.checkPassword(password, result?.password as string)
  if (!isPasswordValid) throw new ApiError(httpStatus.UNAUTHORIZED, 'Unauthorized access.')

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { password: removePassword, ...userinfo } = result.toObject()

  // generate tokens
  const tokenData = { _id: userinfo._id, username: userinfo.username }
  const accessToken = createToken(tokenData, config.jwt.secret!, config.jwt.expiresIn!)
  const refreshToken = createToken(tokenData, config.jwt.refreshSecret!, config.jwt.refreshExpiresIn!)

  const payload = {
    ...userinfo,
    access_token: accessToken,
    refresh_token: refreshToken
  }

  return payload
}

export const refreshTokenrDB = async (data: string): Promise<iRefreshTokenReturn> => {
  const token = verifyToken(data, config.jwt.refreshSecret!)

  if (token) {
    const tokenData = { _id: token._id, uid: token.uid }
    const accessToken = createToken(tokenData, config.jwt.secret!, config.jwt.expiresIn!)

    return { access_token: accessToken }
  } else {
    throw new ApiError(httpStatus.UNAUTHORIZED, 'Token expired.')
  }
}
