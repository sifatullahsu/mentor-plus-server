import { Router } from 'express'
import validateRequest from '../../middlewares/validateRequest'
import { validateRole } from '../../middlewares/validateRole'
import { getUser, getUsers, updateUser } from './user.controller'
import { updateUserZodSchema } from './user.zod'

const userRoute = Router()

userRoute.get('/', getUsers)
userRoute.get('/:id', getUser)
userRoute.patch(
  '/:id',
  validateRole(['student', 'mentor', 'admin', 'super_admin']),
  validateRequest(updateUserZodSchema),
  updateUser
)

export default userRoute
