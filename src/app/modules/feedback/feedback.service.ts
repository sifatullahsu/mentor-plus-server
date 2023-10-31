import httpStatus from 'http-status'
import { IQueryMaker } from 'mongoose-query-maker'
import ApiError from '../../../error/ApiError'
import { iMeta, iReturnWithMeta } from '../../../global/interface'
import transformObject from '../../../shared/files/transformObject'
import User from '../user/user.model'
import { iFeedback } from './feedback.interface'
import Feedback from './feedback.model'

const createData = async (data: iFeedback): Promise<iFeedback> => {
  const isUserValid = await User.count({ _id: data.user })
  if (!isUserValid) throw new ApiError(httpStatus.BAD_REQUEST, 'User id not valid')

  const result = await Feedback.create(data)

  return result
}

const getAllData = async (data: IQueryMaker): Promise<iReturnWithMeta<iFeedback[]>> => {
  const { query, pagination, selector } = data
  const { page, limit, skip, sort } = pagination
  const { select, populate } = selector

  const result = await Feedback.find(query)
    .select(select)
    .skip(skip)
    .limit(limit)
    .sort(sort)
    .populate(populate)

  const count = await Feedback.count(query)

  const meta: iMeta = {
    page,
    limit,
    count
  }

  return { meta, result }
}

const getData = async (id: string): Promise<iFeedback | null> => {
  const result = await Feedback.findById(id)

  return result
}

const updateData = async (id: string, data: Partial<iFeedback>): Promise<iFeedback | null> => {
  const transform = transformObject(data)

  const result = await Feedback.findByIdAndUpdate(id, transform, {
    runValidators: true,
    new: true
  })

  return result
}

const deleteData = async (id: string): Promise<iFeedback | null> => {
  const result = await Feedback.findByIdAndDelete(id)

  return result
}

export const FeedbackService = {
  createData,
  getAllData,
  getData,
  updateData,
  deleteData
}
