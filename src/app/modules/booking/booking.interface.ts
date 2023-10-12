import { Model } from 'mongoose'
import { iBookingStatus, iId, iPackages } from '../../../global/interface'
import {
  iCategoryIdentity,
  iExpertiseIdentity,
  iTopicIdentity,
  iUserIdentity
} from '../../identity/interface'

export type iBooking = {
  expertise: iId
  expertiseDetails: iExpertiseIdentity

  topic: iId
  topicDetails: iTopicIdentity

  user: iId
  userDetails: iUserIdentity

  category: iId
  categoryDetails: iCategoryIdentity

  mentor: iId
  mentorDetails: iUserIdentity

  package: iPackages

  paid: number
  transactionId: string
  status: iBookingStatus
}

export type iBookingModel = Model<iBooking>
