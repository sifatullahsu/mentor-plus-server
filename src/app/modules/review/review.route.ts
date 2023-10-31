import { Router } from 'express'
import { validateRole, validateZod } from '../../middlewares'
import { ReviewController as controller } from './review.controller'
import { createReviewZodSchema, updateReviewZodSchema } from './review.zod'

const router = Router()

router.post(
  '/',
  validateRole(['mentor', 'student']),
  validateZod(createReviewZodSchema),
  controller.createData
)
router.get('/', controller.getAllData)
router.get('/:id', controller.getData)
router.patch('/:id', validateRole([]), validateZod(updateReviewZodSchema), controller.updateData)
router.delete('/:id', validateRole([]), controller.deleteData)

export const ReviewRoute = router
