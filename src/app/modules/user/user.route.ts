import { Router } from 'express'
import { validateRole, validateZod } from '../../middlewares'
import { UserController as controller } from './user.controller'
import { updateUserZodSchema } from './user.zod'

const router = Router()

router.get('/', controller.getAllData)
router.get('/:id', controller.getData)
router.patch(
  '/:id',
  validateRole(['student', 'mentor', 'admin', 'super_admin']),
  validateZod(updateUserZodSchema),
  controller.updateData
)

export const UserRoute = router
