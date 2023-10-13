import { Router } from 'express'
import validateRequest from '../../middlewares/validateRequest'
import { getUser, getUsers, updateUser } from './user.controller'
import { updateUserZodSchema } from './user.zod'

const userRoute = Router()

userRoute.get('/', getUsers)
userRoute.get('/:id', getUser)
userRoute.patch('/:id', validateRequest(updateUserZodSchema), updateUser)

export default userRoute
