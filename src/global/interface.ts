import { Date, Types } from 'mongoose'

export type iId = Types.ObjectId

export type iMongooseDate = Date

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

export type iEducation = {
  institute: string
  passing_year: number
  cgpa: number
}

export type iPackages = {
  title: string
  description: string
  hours: iHours
  price: number
}

export type iGender = 'Male' | 'Female' | 'Others'

export type iRole = 'super_admin' | 'admin' | 'mentor' | 'student'

export type iStatus = 'active' | 'inactive' | 'pending' | 'disabled'

export type iCountryCode = '+880' | '+91' | '+92'

export type iLanguages = 'English' | 'Bengali' | 'Hindi' | 'Urdu' | 'Arabic'

export type iHours = 1 | 2 | 3

export type iBookingStatus = 'completed' | 'pending' | 'canceled'

export type iContentStatus = 'published' | 'draft' | 'pending' | 'unpublished'
