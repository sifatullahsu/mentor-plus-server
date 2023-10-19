import { Router } from 'express'
import validateRequest from '../../middlewares/validateRequest'
import { validateRole } from '../../middlewares/validateRole'
import { createReview, deleteReview, getReview, getReviews, updateReview } from './review.controller'
import { createReviewZodSchema, updateReviewZodSchema } from './review.zod'

const reviewRoute = Router()

reviewRoute.post(
  '/',
  validateRole(['mentor', 'student']),
  validateRequest(createReviewZodSchema),
  createReview
)
reviewRoute.get('/', getReviews)
reviewRoute.get('/:id', getReview)
reviewRoute.patch('/:id', validateRole([]), validateRequest(updateReviewZodSchema), updateReview)
reviewRoute.delete('/:id', validateRole([]), deleteReview)

export default reviewRoute
