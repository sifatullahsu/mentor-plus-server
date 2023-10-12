import {
  iBookingStatus,
  iContentStatus,
  iCountryCode,
  iGender,
  iHours,
  iLanguages,
  iRole,
  iStatus
} from './interface'

export const xCountryCode: iCountryCode[] = ['+880', '+91', '+92']

export const xLanguages: iLanguages[] = ['English', 'Bengali', 'Hindi', 'Urdu', 'Arabic']

export const xGender: iGender[] = ['Male', 'Female', 'Others']

export const xRole: iRole[] = ['super_admin', 'admin', 'mentor', 'student']

export const xStatus: iStatus[] = ['active', 'inactive', 'pending', 'disabled']

export const xHours: iHours[] = [1, 2, 3]

export const xBookingStatus: iBookingStatus[] = ['completed', 'pending', 'canceled']

export const xContentStatus: iContentStatus[] = ['published', 'draft', 'pending', 'unpublished']
