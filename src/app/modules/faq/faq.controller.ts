import { Request, Response } from 'express'
import httpStatus from 'http-status'
import { queryMaker } from 'mongoose-query-maker'
import { apiResponse, catchAsync } from '../../../shared'
import { faqQuery, faqSelector } from './faq.constant'
import { iFaq } from './faq.interface'
import { FaqService as service } from './faq.service'

const createData = catchAsync(async (req: Request, res: Response) => {
  const result = await service.createData(req.body)

  apiResponse<iFaq>(res, {
    success: true,
    status: httpStatus.OK,
    message: 'Faq created successfull.',
    data: result
  })
})

const getAllData = catchAsync(async (req: Request, res: Response) => {
  const query = queryMaker(req.query, req.user, faqQuery, faqSelector)
  const { result, meta } = await service.getAllData(query)

  apiResponse<iFaq[]>(res, {
    success: true,
    status: httpStatus.OK,
    message: 'Faqs fetched successfull.',
    data: result,
    meta
  })
})

const getData = catchAsync(async (req: Request, res: Response) => {
  const result = await service.getData(req.params.id)

  apiResponse<iFaq>(res, {
    success: true,
    status: httpStatus.OK,
    message: 'Faq fetched successfull.',
    data: result
  })
})

const updateData = catchAsync(async (req: Request, res: Response) => {
  const result = await service.updateData(req.params.id, req.body)

  apiResponse<iFaq>(res, {
    success: true,
    status: httpStatus.OK,
    message: 'Faq updated successfull.',
    data: result
  })
})

const deleteData = catchAsync(async (req: Request, res: Response) => {
  const result = await service.deleteData(req.params.id)

  apiResponse<iFaq>(res, {
    success: true,
    status: httpStatus.OK,
    message: 'Faq deleted successfull.',
    data: result
  })
})

export const FaqController = {
  createData,
  getAllData,
  getData,
  updateData,
  deleteData
}
