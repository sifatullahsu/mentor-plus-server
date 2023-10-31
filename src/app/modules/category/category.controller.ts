import { Request, Response } from 'express'
import httpStatus from 'http-status'
import { queryMaker } from 'mongoose-query-maker'
import { apiResponse, catchAsync } from '../../../shared'
import { categoryQuery, categorySelector } from './category.constant'
import { iCategory } from './category.interface'
import { CategoryService as service } from './category.service'

const createData = catchAsync(async (req: Request, res: Response) => {
  const result = await service.createData(req.body)

  apiResponse<iCategory>(res, {
    success: true,
    status: httpStatus.OK,
    message: 'Category created successfull.',
    data: result
  })
})

const getAllData = catchAsync(async (req: Request, res: Response) => {
  const query = queryMaker(req.query, req.user, categoryQuery, categorySelector)
  const { result, meta } = await service.getAllData(query)

  apiResponse<iCategory[]>(res, {
    success: true,
    status: httpStatus.OK,
    message: 'Categories fetched successfull.',
    data: result,
    meta
  })
})

const getData = catchAsync(async (req: Request, res: Response) => {
  const result = await service.getData(req.params.id)

  apiResponse<iCategory>(res, {
    success: true,
    status: httpStatus.OK,
    message: 'Category fetched successfull.',
    data: result
  })
})

const updateData = catchAsync(async (req: Request, res: Response) => {
  const result = await service.updateData(req.params.id, req.body)

  apiResponse<iCategory>(res, {
    success: true,
    status: httpStatus.OK,
    message: 'Category updated successfull.',
    data: result
  })
})

const deleteData = catchAsync(async (req: Request, res: Response) => {
  const result = await service.deleteData(req.params.id)

  apiResponse<iCategory>(res, {
    success: true,
    status: httpStatus.OK,
    message: 'Category deleted successfull.',
    data: result
  })
})

export const CategoryController = {
  createData,
  getAllData,
  getData,
  updateData,
  deleteData
}
