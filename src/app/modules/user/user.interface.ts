import { Model } from 'mongoose'
import { iEducation, iEmail, iGender, iName, iNumber, iRole, iStatus } from '../../../global/interface'

export type iUser = {
  username: string
  name: iName
  email: iEmail
  number: iNumber
  gender: iGender
  image: string
  password: string
  role: iRole
  status: iStatus
  about: string
  education: iEducation[]
}

export type iUserModel = {
  hashGenerator(password: string): Promise<string>
  checkPassword(givenPassword: string, savedPassword: string): Promise<boolean>
} & Model<iUser>
