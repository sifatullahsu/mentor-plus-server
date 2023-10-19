import { Model } from 'mongoose'
import { iId } from '../../../global/interface'

export type iReview = {
  rating: number
  title: string
  description: string
  service: iId
  user: iId
  booking: iId
}

export type iReviewModel = Model<iReview>
