import { Request, Response } from 'express'
import httpStatus from 'http-status'
import queryBuilder from '../../../helper/queryBuilder'
import apiResponse from '../../../shared/apiResponse'
import catchAsync from '../../../shared/catchAsync'
import { reviewQueryFields } from './review.constaint'
import { iReview } from './review.interface'
import { createReviewDB, deleteReviewDB, getReviewDB, getReviewsDB, updateReviewDB } from './review.service'

export const createReview = catchAsync(async (req: Request, res: Response) => {
  const result = await createReviewDB(req.body)

  apiResponse<iReview>(res, {
    success: true,
    status: httpStatus.OK,
    message: 'Review created successfull.',
    data: result
  })
})

export const getReviews = catchAsync(async (req: Request, res: Response) => {
  const query = queryBuilder(req.query, reviewQueryFields)
  const { result, meta } = await getReviewsDB(query)

  apiResponse<iReview[]>(res, {
    success: true,
    status: httpStatus.OK,
    message: 'Reviews fetched successfull.',
    data: result,
    meta
  })
})

export const getReview = catchAsync(async (req: Request, res: Response) => {
  const result = await getReviewDB(req.params.id)

  apiResponse<iReview>(res, {
    success: true,
    status: httpStatus.OK,
    message: 'Review fetched successfull.',
    data: result
  })
})

export const updateReview = catchAsync(async (req: Request, res: Response) => {
  const result = await updateReviewDB(req.params.id, req.body)

  apiResponse<iReview>(res, {
    success: true,
    status: httpStatus.OK,
    message: 'Review updated successfull.',
    data: result
  })
})

export const deleteReview = catchAsync(async (req: Request, res: Response) => {
  const result = await deleteReviewDB(req.params.id)

  apiResponse<iReview>(res, {
    success: true,
    status: httpStatus.OK,
    message: 'Review deleted successfull.',
    data: result
  })
})
