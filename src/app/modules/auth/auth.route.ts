import { Router } from 'express'
import validateRequest from '../../middlewares/validateRequest'
import { loginUser, refreshToken, registerUser } from './auth.controller'
import { loginZodSchema, refreshTokenZodSchema, registerZodSchema } from './auth.zod'

const authRoute = Router()

authRoute.post('/register', validateRequest(registerZodSchema), registerUser)
authRoute.post('/login', validateRequest(loginZodSchema), loginUser)
authRoute.post('/refresh-token', validateRequest(refreshTokenZodSchema), refreshToken)

export default authRoute
