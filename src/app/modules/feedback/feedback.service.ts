import httpStatus from 'http-status'
import ApiError from '../../../error/ApiError'
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

export const getFeedbacksDB = async (): Promise<iFeedback[] | null> => {
  const result = await Feedback.find({})

  return result
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
