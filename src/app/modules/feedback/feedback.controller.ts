import { Request, Response } from 'express'
import httpStatus from 'http-status'
import { queryMaker } from 'mongoose-query-maker'
import { apiResponse, catchAsync } from '../../../shared'
import { feedbackQuery, feedbackSelector } from './feedback.constant'
import { iFeedback } from './feedback.interface'
import { FeedbackService as service } from './feedback.service'

const createData = catchAsync(async (req: Request, res: Response) => {
  const result = await service.createData(req.body)

  apiResponse<iFeedback>(res, {
    success: true,
    status: httpStatus.OK,
    message: 'Feedback created successfull.',
    data: result
  })
})

const getAllData = catchAsync(async (req: Request, res: Response) => {
  const query = queryMaker(req.query, req.user, feedbackQuery, feedbackSelector)
  const { result, meta } = await service.getAllData(query)

  apiResponse<iFeedback[]>(res, {
    success: true,
    status: httpStatus.OK,
    message: 'Feedbacks fetched successfull.',
    data: result,
    meta
  })
})

const getData = catchAsync(async (req: Request, res: Response) => {
  const result = await service.getData(req.params.id)

  apiResponse<iFeedback>(res, {
    success: true,
    status: httpStatus.OK,
    message: 'Feedback fetched successfull.',
    data: result
  })
})

const updateData = catchAsync(async (req: Request, res: Response) => {
  const result = await service.updateData(req.params.id, req.body)

  apiResponse<iFeedback>(res, {
    success: true,
    status: httpStatus.OK,
    message: 'Feedback updated successfull.',
    data: result
  })
})

const deleteData = catchAsync(async (req: Request, res: Response) => {
  const result = await service.deleteData(req.params.id)

  apiResponse<iFeedback>(res, {
    success: true,
    status: httpStatus.OK,
    message: 'Feedback deleted successfull.',
    data: result
  })
})

export const FeedbackController = {
  createData,
  getAllData,
  getData,
  updateData,
  deleteData
}
