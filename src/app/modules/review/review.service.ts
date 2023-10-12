import httpStatus from 'http-status'
import ApiError from '../../../error/ApiError'
import transformObject from '../../../helper/transformObject'
import Booking from '../booking/booking.model'
import { iReview } from './review.interface'
import Review from './review.model'

export const createReviewDB = async (data: iReview): Promise<iReview> => {
  const isValid = await Booking.count({
    $and: [{ _id: data.booking }, { expertise: data.expertise }, { user: data.user }]
  })
  if (!isValid) throw new ApiError(httpStatus.BAD_REQUEST, 'Ids are incorrect')

  const aleadyGivedReview = await Review.count({
    $and: [{ booking: data.booking }, { expertise: data.expertise }, { user: data.user }]
  })
  if (aleadyGivedReview) throw new ApiError(httpStatus.BAD_REQUEST, 'You already gived review')

  const result = await Review.create(data)

  return result
}

export const getReviewsDB = async (): Promise<iReview[] | null> => {
  const result = await Review.find({})

  return result
}

export const getReviewDB = async (id: string): Promise<iReview | null> => {
  const result = await Review.findById(id)

  return result
}

export const updateReviewDB = async (id: string, data: Partial<iReview>): Promise<iReview | null> => {
  const transform = transformObject(data)

  const result = await Review.findByIdAndUpdate(id, transform, {
    runValidators: true,
    new: true
  })

  return result
}

export const deleteReviewDB = async (id: string): Promise<iReview | null> => {
  const result = await Review.findByIdAndDelete(id)

  return result
}
