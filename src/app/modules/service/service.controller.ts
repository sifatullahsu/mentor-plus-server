import { Request, Response } from 'express'
import httpStatus from 'http-status'
import createPagination, { paginationQuery } from '../../../helper/createPagination'
import queryBuilder from '../../../helper/queryBuilder'
import apiResponse from '../../../shared/apiResponse'
import catchAsync from '../../../shared/catchAsync'
import queryPicker from '../../../shared/queryPicker'
import { serviceQueryFields } from './service.constaint'
import { iService } from './service.interface'
import {
  createServiceDB,
  deleteServiceDB,
  getServiceDB,
  getServicesDB,
  getServicesWithSearchDB,
  updateServiceDB
} from './service.service'

export const createService = catchAsync(async (req: Request, res: Response) => {
  const result = await createServiceDB(req.body)

  apiResponse<iService>(res, {
    success: true,
    status: httpStatus.OK,
    message: 'Service created successfull.',
    data: result
  })
})

export const getServices = catchAsync(async (req: Request, res: Response) => {
  const query = queryBuilder(req.query, serviceQueryFields)
  const { result, meta } = await getServicesDB(query)

  apiResponse<iService[]>(res, {
    success: true,
    status: httpStatus.OK,
    message: 'Services fetched successfull.',
    data: result,
    meta
  })
})

export const getServicesWithSearch = catchAsync(async (req: Request, res: Response) => {
  const pagination = createPagination(queryPicker(req.query, paginationQuery))
  const query = queryPicker(req.query, ['search', 'min', 'max', 'category'])

  const { result, meta } = await getServicesWithSearchDB(pagination, query)

  apiResponse<iService[]>(res, {
    success: true,
    status: httpStatus.OK,
    message: 'Services fetched successfull.',
    data: result,
    meta
  })
})

export const getService = catchAsync(async (req: Request, res: Response) => {
  const result = await getServiceDB(req.params.id)

  apiResponse<iService>(res, {
    success: true,
    status: httpStatus.OK,
    message: 'Service fetched successfull.',
    data: result
  })
})

export const updateService = catchAsync(async (req: Request, res: Response) => {
  const result = await updateServiceDB(req.params.id, req.body)

  apiResponse<iService>(res, {
    success: true,
    status: httpStatus.OK,
    message: 'Service updated successfull.',
    data: result
  })
})

export const deleteService = catchAsync(async (req: Request, res: Response) => {
  const result = await deleteServiceDB(req.params.id)

  apiResponse<iService>(res, {
    success: true,
    status: httpStatus.OK,
    message: 'Service deleted successfull.',
    data: result
  })
})
