import httpStatus from 'http-status'
import ApiError from '../../../error/ApiError'
import { iMeta, iReturnWithMeta } from '../../../global/interface'
import { iQueryBuilderReturn } from '../../../helper/queryBuilder'
import transformObject from '../../../helper/transformObject'
import Booking from '../booking/booking.model'
import { iReview } from './review.interface'
import Review from './review.model'

export const createReviewDB = async (data: iReview): Promise<iReview> => {
  const isValid = await Booking.count({
    $and: [{ _id: data.booking }, { service: data.service }, { user: data.user }]
  })
  if (!isValid) throw new ApiError(httpStatus.BAD_REQUEST, 'Ids are incorrect')

  const aleadyGivedReview = await Review.count({
    $and: [{ booking: data.booking }, { service: data.service }, { user: data.user }]
  })
  if (aleadyGivedReview) throw new ApiError(httpStatus.BAD_REQUEST, 'You already gived review')

  const result = await Review.create(data)

  return result
}

export const getReviewsDB = async (data: iQueryBuilderReturn): Promise<iReturnWithMeta<iReview[]>> => {
  const { query, pagination } = data
  const { page, order, size, skip, sort } = pagination

  const result = await Review.find(query)
    .skip(skip)
    .limit(size)
    .sort({ [sort]: order })

  const count = await Review.count(query)

  const meta: iMeta = {
    page,
    size,
    count
  }

  return { meta, result }
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
