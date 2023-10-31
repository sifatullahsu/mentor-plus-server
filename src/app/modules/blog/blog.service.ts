import httpStatus from 'http-status'
import { isValidObjectId } from 'mongoose'
import { IQueryMaker } from 'mongoose-query-maker'
import ApiError from '../../../error/ApiError'
import { iMeta, iReturnWithMeta } from '../../../global/interface'
import transformObject from '../../../shared/files/transformObject'
import User from '../user/user.model'
import { iBlog } from './blog.interface'
import Blog from './blog.model'

const createData = async (data: iBlog): Promise<iBlog> => {
  const isUserValid = await User.count({ _id: data.user })
  if (!isUserValid) throw new ApiError(httpStatus.BAD_REQUEST, 'User id not valid')

  const result = await Blog.create(data)

  return result
}

const getAllData = async (data: IQueryMaker): Promise<iReturnWithMeta<iBlog[]>> => {
  const { query, pagination, selector } = data
  const { page, limit, skip, sort } = pagination
  const { select, populate } = selector

  const result = await Blog.find(query)
    .select(select)
    .populate(populate)
    // .populate('category')
    // .populate('topics')
    // .populate('user')
    .skip(skip)
    .limit(limit)
    .sort(sort)

  const count = await Blog.count(query)

  const meta: iMeta = {
    page,
    limit,
    count
  }

  return { meta, result }
}

const getData = async (id: string): Promise<iBlog | null> => {
  const query = isValidObjectId(id) ? { _id: id } : { slug: id }
  const result = await Blog.findOne(query).populate('category').populate('topics').populate('user')

  return result
}

const updateData = async (id: string, data: Partial<iBlog>): Promise<iBlog | null> => {
  const transform = transformObject(data)

  const result = await Blog.findByIdAndUpdate(id, transform, {
    runValidators: true,
    new: true
  })

  return result
}

const deleteData = async (id: string): Promise<iBlog | null> => {
  const result = await Blog.findByIdAndDelete(id)

  return result
}

export const BlogService = {
  createData,
  getAllData,
  getData,
  updateData,
  deleteData
}
