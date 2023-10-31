import { Request, Response } from 'express'
import httpStatus from 'http-status'
import { apiResponse, catchAsync } from '../../../shared'
import { iUser } from '../user/user.interface'
import { iAuth, iRefreshTokenReturn } from './auth.interface'
import { loginUserDB, refreshTokenrDB, registerUserDB } from './auth.service'

export const registerUser = catchAsync(async (req: Request, res: Response) => {
  const result = await registerUserDB(req.body)

  apiResponse<Partial<iUser>>(res, {
    success: true,
    status: httpStatus.OK,
    message: 'User registered successfull.',
    data: result
  })
})

export const loginUser = catchAsync(async (req: Request, res: Response) => {
  const result = await loginUserDB(req.body)

  apiResponse<iAuth>(res, {
    success: true,
    status: httpStatus.OK,
    message: 'Login successfull.',
    data: result
  })
})

export const refreshToken = catchAsync(async (req: Request, res: Response) => {
  const result = await refreshTokenrDB(req.body.refresh_token)

  apiResponse<iRefreshTokenReturn>(res, {
    success: true,
    status: httpStatus.OK,
    message: 'New access token.',
    data: result
  })
})
