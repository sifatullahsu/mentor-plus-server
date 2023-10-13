import { Router } from 'express'
import validateRequest from '../../middlewares/validateRequest'
import {
  createFeedback,
  deleteFeedback,
  getFeedback,
  getFeedbacks,
  updateFeedback
} from './feedback.controller'
import { createFeedbackZodSchema, updateFeedbackZodSchema } from './feedback.zod'

const feedbackRoute = Router()

feedbackRoute.post('/', validateRequest(createFeedbackZodSchema), createFeedback)
feedbackRoute.get('/', getFeedbacks)
feedbackRoute.get('/:id', getFeedback)
feedbackRoute.patch('/:id', validateRequest(updateFeedbackZodSchema), updateFeedback)
feedbackRoute.delete('/:id', deleteFeedback)

export default feedbackRoute
