import { Router } from 'express'
import { validateRole, validateZod } from '../../middlewares'
import { FeedbackController as controller } from './feedback.controller'
import { createFeedbackZodSchema, updateFeedbackZodSchema } from './feedback.zod'

const router = Router()

router.post(
  '/',
  validateRole(['admin', 'mentor', 'student']),
  validateZod(createFeedbackZodSchema),
  controller.createData
)
router.get('/', validateRole(['mentor', 'admin', 'student']), controller.getAllData)
router.get('/:id', validateRole(['mentor', 'admin', 'student']), controller.getData)
router.patch('/:id', validateRole([]), validateZod(updateFeedbackZodSchema), controller.updateData)
router.delete('/:id', validateRole([]), controller.deleteData)

export const FeedbackRoute = router
