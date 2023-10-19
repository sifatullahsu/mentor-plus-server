import { Router } from 'express'
import validateRequest from '../../middlewares/validateRequest'
import { validateRole } from '../../middlewares/validateRole'
import {
  createFeedback,
  deleteFeedback,
  getFeedback,
  getFeedbacks,
  updateFeedback
} from './feedback.controller'
import { createFeedbackZodSchema, updateFeedbackZodSchema } from './feedback.zod'

const feedbackRoute = Router()

feedbackRoute.post(
  '/',
  validateRole(['admin', 'mentor', 'student']),
  validateRequest(createFeedbackZodSchema),
  createFeedback
)
feedbackRoute.get('/', validateRole(['mentor', 'admin', 'student']), getFeedbacks)
feedbackRoute.get('/:id', validateRole(['mentor', 'admin', 'student']), getFeedback)
feedbackRoute.patch('/:id', validateRole([]), validateRequest(updateFeedbackZodSchema), updateFeedback)
feedbackRoute.delete('/:id', validateRole([]), deleteFeedback)

export default feedbackRoute
