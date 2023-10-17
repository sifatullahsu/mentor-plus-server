import { Request, Response } from 'express'
import httpStatus from 'http-status'
import apiResponse from '../../../shared/apiResponse'
import catchAsync from '../../../shared/catchAsync'
import { iService } from './service.interface'
import {
  createServiceDB,
  deleteServiceDB,
  getServiceDB,
  getServicesDB,
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
  const result = await getServicesDB()

  apiResponse<iService[]>(res, {
    success: true,
    status: httpStatus.OK,
    message: 'Services fetched successfull.',
    data: result
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
