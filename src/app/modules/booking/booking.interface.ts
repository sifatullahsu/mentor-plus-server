import { Model } from 'mongoose'
import { iBookingStatus, iId, iMongooseDate } from '../../../global/interface'
import { iCategoryIdentity, iServiceIdentity, iTopicIdentity, iUserIdentity } from '../../identity/interface'

export type iBooking = {
  service: iId
  serviceDetails: iServiceIdentity

  topic: iId
  topicDetails: iTopicIdentity

  user: iId
  userDetails: iUserIdentity

  category: iId
  categoryDetails: iCategoryIdentity

  mentor: iId
  mentorDetails: iUserIdentity

  price: number
  hours: number
  time: iMongooseDate

  transactionId: string
  status: iBookingStatus
}

export type iBookingModel = Model<iBooking>
