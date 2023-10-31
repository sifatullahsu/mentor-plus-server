import { Router } from 'express'
import { validateZod } from '../../middlewares'
import { loginUser, refreshToken, registerUser } from './auth.controller'
import { loginZodSchema, refreshTokenZodSchema, registerZodSchema } from './auth.zod'

const router = Router()

router.post('/register', validateZod(registerZodSchema), registerUser)
router.post('/login', validateZod(loginZodSchema), loginUser)
router.post('/refresh-token', validateZod(refreshTokenZodSchema), refreshToken)

export const AuthRoute = router
