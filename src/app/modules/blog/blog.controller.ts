import { Request, Response } from 'express'
import httpStatus from 'http-status'
import apiResponse from '../../../shared/apiResponse'
import catchAsync from '../../../shared/catchAsync'
import { iBlog } from './blog.interface'
import { createBlogDB, deleteBlogDB, getBlogDB, getBlogsDB, updateBlogDB } from './blog.service'

export const createBlog = catchAsync(async (req: Request, res: Response) => {
  const result = await createBlogDB(req.body)

  apiResponse<iBlog>(res, {
    success: true,
    status: httpStatus.OK,
    message: 'Blog created successfull.',
    data: result
  })
})

export const getBlogs = catchAsync(async (req: Request, res: Response) => {
  const result = await getBlogsDB()

  apiResponse<iBlog[]>(res, {
    success: true,
    status: httpStatus.OK,
    message: 'Blogs fetched successfull.',
    data: result
  })
})

export const getBlog = catchAsync(async (req: Request, res: Response) => {
  const result = await getBlogDB(req.params.id)

  apiResponse<iBlog>(res, {
    success: true,
    status: httpStatus.OK,
    message: 'Blog fetched successfull.',
    data: result
  })
})

export const updateBlog = catchAsync(async (req: Request, res: Response) => {
  const result = await updateBlogDB(req.params.id, req.body)

  apiResponse<iBlog>(res, {
    success: true,
    status: httpStatus.OK,
    message: 'Blog updated successfull.',
    data: result
  })
})

export const deleteBlog = catchAsync(async (req: Request, res: Response) => {
  const result = await deleteBlogDB(req.params.id)

  apiResponse<iBlog>(res, {
    success: true,
    status: httpStatus.OK,
    message: 'Blog deleted successfull.',
    data: result
  })
})