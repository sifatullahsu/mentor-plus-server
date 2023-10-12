import { Router } from 'express'
import { getUser, getUsers, updateUser } from './user.controller'

const userRoute = Router()

userRoute.get('/', getUsers)
userRoute.get('/:id', getUser)
userRoute.patch('/:id', updateUser)

export default userRoute
