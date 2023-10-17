import httpStatus from 'http-status'
import ApiError from '../../../error/ApiError'
import { iMeta, iReturnWithMeta } from '../../../global/interface'
import { iQueryBuilderReturn } from '../../../helper/queryBuilder'
import transformObject from '../../../helper/transformObject'
import User from '../user/user.model'
import { iFeedback } from './feedback.interface'
import Feedback from './feedback.model'

export const createFeedbackDB = async (data: iFeedback): Promise<iFeedback> => {
  const isUserValid = await User.count({ _id: data.user })
  if (!isUserValid) throw new ApiError(httpStatus.BAD_REQUEST, 'User id not valid')

  const result = await Feedback.create(data)

  return result
}

export const getFeedbacksDB = async (data: iQueryBuilderReturn): Promise<iReturnWithMeta<iFeedback[]>> => {
  const { query, pagination } = data
  const { page, order, size, skip, sort } = pagination

  const result = await Feedback.find(query)
    .skip(skip)
    .limit(size)
    .sort({ [sort]: order })

  const count = await Feedback.count(query)

  const meta: iMeta = {
    page,
    size,
    count
  }

  return { meta, result }
}

export const getFeedbackDB = async (id: string): Promise<iFeedback | null> => {
  const result = await Feedback.findById(id)

  return result
}

export const updateFeedbackDB = async (id: string, data: Partial<iFeedback>): Promise<iFeedback | null> => {
  const transform = transformObject(data)

  const result = await Feedback.findByIdAndUpdate(id, transform, {
    runValidators: true,
    new: true
  })

  return result
}

export const deleteFeedbackDB = async (id: string): Promise<iFeedback | null> => {
  const result = await Feedback.findByIdAndDelete(id)

  return result
}
