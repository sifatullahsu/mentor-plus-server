import { Router } from 'express'
import validateRequest from '../../middlewares/validateRequest'
import { createReview, deleteReview, getReview, getReviews, updateReview } from './review.controller'
import { createReviewZodSchema, updateReviewZodSchema } from './review.zod'

const reviewRoute = Router()

reviewRoute.post('/', validateRequest(createReviewZodSchema), createReview)
reviewRoute.get('/', getReviews)
reviewRoute.get('/:id', getReview)
reviewRoute.patch('/:id', validateRequest(updateReviewZodSchema), updateReview)
reviewRoute.delete('/:id', deleteReview)

export default reviewRoute
