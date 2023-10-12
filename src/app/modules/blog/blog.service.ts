import httpStatus from 'http-status'
import ApiError from '../../../error/ApiError'
import transformObject from '../../../helper/transformObject'
import User from '../user/user.model'
import { iBlog } from './blog.interface'
import Blog from './blog.model'

export const createBlogDB = async (data: iBlog): Promise<iBlog> => {
  const isUserValid = await User.count({ _id: data.user })
  if (!isUserValid) throw new ApiError(httpStatus.BAD_REQUEST, 'User id not valid')

  const result = await Blog.create(data)

  return result
}

export const getBlogsDB = async (): Promise<iBlog[] | null> => {
  const result = await Blog.find({})

  return result
}

export const getBlogDB = async (id: string): Promise<iBlog | null> => {
  const result = await Blog.findById(id)

  return result
}

export const updateBlogDB = async (id: string, data: Partial<iBlog>): Promise<iBlog | null> => {
  const transform = transformObject(data)

  const result = await Blog.findByIdAndUpdate(id, transform, {
    runValidators: true,
    new: true
  })

  return result
}

export const deleteBlogDB = async (id: string): Promise<iBlog | null> => {
  const result = await Blog.findByIdAndDelete(id)

  return result
}
