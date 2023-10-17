import { Request, Response } from 'express'
import httpStatus from 'http-status'
import queryBuilder from '../../../helper/queryBuilder'
import apiResponse from '../../../shared/apiResponse'
import catchAsync from '../../../shared/catchAsync'
import { faqQueryFields } from './faq.constant'
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
  const query = queryBuilder(req.query, faqQueryFields)
  const { result, meta } = await getFaqsDB(query)

  apiResponse<iFaq[]>(res, {
    success: true,
    status: httpStatus.OK,
    message: 'Faqs fetched successfull.',
    data: result,
    meta
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
