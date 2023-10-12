import { Router } from 'express'
import { createReview, deleteReview, getReview, getReviews, updateReview } from './review.controller'

const reviewRoute = Router()

reviewRoute.post('/', createReview)
reviewRoute.get('/', getReviews)
reviewRoute.get('/:id', getReview)
reviewRoute.patch('/:id', updateReview)
reviewRoute.delete('/:id', deleteReview)

export default reviewRoute
