import { Request, Response } from 'express'
import httpStatus from 'http-status'
import { queryMaker } from 'mongoose-query-maker'
import { apiResponse, catchAsync } from '../../../shared'
import { blogQuery, blogSelector } from './blog.constant'
import { iBlog } from './blog.interface'
import { BlogService as service } from './blog.service'

const createData = catchAsync(async (req: Request, res: Response) => {
  const result = await service.createData(req.body)

  apiResponse<iBlog>(res, {
    success: true,
    status: httpStatus.OK,
    message: 'Blog created successfull.',
    data: result
  })
})

const getAllData = catchAsync(async (req: Request, res: Response) => {
  const query = queryMaker(req.query, req.user, blogQuery, blogSelector)
  const { result, meta } = await service.getAllData(query)

  apiResponse<iBlog[]>(res, {
    success: true,
    status: httpStatus.OK,
    message: 'Blogs fetched successfull.',
    data: result,
    meta
  })
})

const getData = catchAsync(async (req: Request, res: Response) => {
  const result = await service.getData(req.params.id)

  apiResponse<iBlog>(res, {
    success: true,
    status: httpStatus.OK,
    message: 'Blog fetched successfull.',
    data: result
  })
})

const updateData = catchAsync(async (req: Request, res: Response) => {
  const result = await service.updateData(req.params.id, req.body)

  apiResponse<iBlog>(res, {
    success: true,
    status: httpStatus.OK,
    message: 'Blog updated successfull.',
    data: result
  })
})

const deleteData = catchAsync(async (req: Request, res: Response) => {
  const result = await service.deleteData(req.params.id)

  apiResponse<iBlog>(res, {
    success: true,
    status: httpStatus.OK,
    message: 'Blog deleted successfull.',
    data: result
  })
})

export const BlogController = {
  createData,
  getAllData,
  getData,
  updateData,
  deleteData
}
