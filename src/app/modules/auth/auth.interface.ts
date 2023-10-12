import { Types } from 'mongoose'
import { iEmail, iGender, iName, iNumber, iRole, iStatus } from '../../../global/interface'

export type iAuth = {
  _id: Types.ObjectId
  name: iName
  email: iEmail
  number: iNumber
  gender: iGender
  role: iRole
  status: iStatus
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
