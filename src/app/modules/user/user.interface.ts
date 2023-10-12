import { Model } from 'mongoose'
import { iCountryCode } from '../../../global/interface'

export type iName = {
  firstName: string
  lastName: string
}

export type iEmail = {
  address: string
  is_verified: boolean
}

export type iNumber = {
  cc: iCountryCode
  digits: string
  is_verified: boolean
}

export type iGender = 'Male' | 'Female' | 'Others'

export type iRole = 'super_admin' | 'admin' | 'mentor' | 'student'

export type iUserStatus = 'active' | 'inactive' | 'pending' | 'disabled'

export type iEducation = {
  institute: string
  passing_year: number
  cgpa: number
}

export type iUser = {
  username: string
  name: iName
  email: iEmail
  number: iNumber
  gender: iGender
  password: string
  role: iRole
  status: iUserStatus
  about: string
  education: iEducation[]
}

export type iUserModel = {
  hashGenerator(password: string): Promise<string>
  checkPassword(givenPassword: string, savedPassword: string): Promise<boolean>
} & Model<iUser>
