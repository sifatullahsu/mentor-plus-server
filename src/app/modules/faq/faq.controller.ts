import { Request, Response } from 'express'
import httpStatus from 'http-status'
import apiResponse from '../../../shared/apiResponse'
import catchAsync from '../../../shared/catchAsync'
import { iFaq } from './faq.interface'
import { createFaqDB, deleteFaqDB, getFaqDB, getFaqsDB, updateFaqDB } from './faq.service'

export const createFaq = catchAsync(async (req: Request, res: Response) => {
  const result = await createFaqDB(req.body)

  apiResponse<iFaq>(res, {
    success: true,
    status: httpStatus.OK,
    message: 'Faq created successfull.',
    data: result
  })
})

export const getFaqs = catchAsync(async (req: Request, res: Response) => {
  const result = await getFaqsDB()

  apiResponse<iFaq[]>(res, {
    success: true,
    status: httpStatus.OK,
    message: 'Faqs fetched successfull.',
    data: result
  })
})

export const getFaq = catchAsync(async (req: Request, res: Response) => {
  const result = await getFaqDB(req.params.id)

  apiResponse<iFaq>(res, {
    success: true,
    status: httpStatus.OK,
    message: 'Faq fetched successfull.',
    data: result
  })
})

export const updateFaq = catchAsync(async (req: Request, res: Response) => {
  const result = await updateFaqDB(req.params.id, req.body)

  apiResponse<iFaq>(res, {
    success: true,
    status: httpStatus.OK,
    message: 'Faq updated successfull.',
    data: result
  })
})

export const deleteFaq = catchAsync(async (req: Request, res: Response) => {
  const result = await deleteFaqDB(req.params.id)

  apiResponse<iFaq>(res, {
    success: true,
    status: httpStatus.OK,
    message: 'Faq deleted successfull.',
    data: result
  })
})
