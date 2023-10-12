import { Request, Response } from 'express'
import httpStatus from 'http-status'
import apiResponse from '../../../shared/apiResponse'
import catchAsync from '../../../shared/catchAsync'
import { iFeedback } from './feedback.interface'
import {
  createFeedbackDB,
  deleteFeedbackDB,
  getFeedbackDB,
  getFeedbacksDB,
  updateFeedbackDB
} from './feedback.service'

export const createFeedback = catchAsync(async (req: Request, res: Response) => {
  const result = await createFeedbackDB(req.body)

  apiResponse<iFeedback>(res, {
    success: true,
    status: httpStatus.OK,
    message: 'Feedback created successfull.',
    data: result
  })
})

export const getFeedbacks = catchAsync(async (req: Request, res: Response) => {
  const result = await getFeedbacksDB()

  apiResponse<iFeedback[]>(res, {
    success: true,
    status: httpStatus.OK,
    message: 'Feedbacks fetched successfull.',
    data: result
  })
})

export const getFeedback = catchAsync(async (req: Request, res: Response) => {
  const result = await getFeedbackDB(req.params.id)

  apiResponse<iFeedback>(res, {
    success: true,
    status: httpStatus.OK,
    message: 'Feedback fetched successfull.',
    data: result
  })
})

export const updateFeedback = catchAsync(async (req: Request, res: Response) => {
  const result = await updateFeedbackDB(req.params.id, req.body)

  apiResponse<iFeedback>(res, {
    success: true,
    status: httpStatus.OK,
    message: 'Feedback updated successfull.',
    data: result
  })
})

export const deleteFeedback = catchAsync(async (req: Request, res: Response) => {
  const result = await deleteFeedbackDB(req.params.id)

  apiResponse<iFeedback>(res, {
    success: true,
    status: httpStatus.OK,
    message: 'Feedback deleted successfull.',
    data: result
  })
})