import { Types } from 'mongoose'
import { iEmail, iGender, iName, iNumber, iRole, iUserStatus } from '../user/user.interface'

export type iAuth = {
  _id: Types.ObjectId
  name: iName
  email: iEmail
  number: iNumber
  gender: iGender
  role: iRole
  status: iUserStatus
  access_token: string
  refresh_token: string
}

export type iLoginReqData = {
  username: string
  password: string
}

export type iRefreshTokenReturn = {
  access_token: string
}
