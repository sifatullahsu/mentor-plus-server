import { Router } from 'express'
import {
  createFeedback,
  deleteFeedback,
  getFeedback,
  getFeedbacks,
  updateFeedback
} from './feedback.controller'

const feedbackRoute = Router()

feedbackRoute.post('/', createFeedback)
feedbackRoute.get('/', getFeedbacks)
feedbackRoute.get('/:id', getFeedback)
feedbackRoute.patch('/:id', updateFeedback)
feedbackRoute.delete('/:id', deleteFeedback)

export default feedbackRoute
