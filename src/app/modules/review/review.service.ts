import httpStatus from 'http-status'
import { IQueryMaker } from 'mongoose-query-maker'
import ApiError from '../../../error/ApiError'
import { iMeta, iReturnWithMeta } from '../../../global/interface'
import transformObject from '../../../shared/files/transformObject'
import Booking from '../booking/booking.model'
import { iReview } from './review.interface'
import Review from './review.model'

const createData = async (data: iReview): Promise<iReview> => {
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

const getAllData = async (data: IQueryMaker): Promise<iReturnWithMeta<iReview[]>> => {
  const { query, pagination, selector } = data
  const { page, limit, skip, sort } = pagination
  const { select, populate } = selector

  const result = await Review.find(query).select(select).skip(skip).limit(limit).sort(sort).populate(populate)

  const count = await Review.count(query)

  const meta: iMeta = {
    page,
    limit,
    count
  }

  return { meta, result }
}

const getData = async (id: string): Promise<iReview | null> => {
  const result = await Review.findById(id)

  return result
}

const updateData = async (id: string, data: Partial<iReview>): Promise<iReview | null> => {
  const transform = transformObject(data)

  const result = await Review.findByIdAndUpdate(id, transform, {
    runValidators: true,
    new: true
  })

  return result
}

const deleteData = async (id: string): Promise<iReview | null> => {
  const result = await Review.findByIdAndDelete(id)

  return result
}

export const ReviewService = {
  createData,
  getAllData,
  getData,
  updateData,
  deleteData
}
