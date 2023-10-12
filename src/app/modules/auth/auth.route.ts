import { Router } from 'express'
import { loginUser, refreshToken, registerUser } from './auth.controller'

const authRoute = Router()

authRoute.post('/register', registerUser)
authRoute.post('/login', loginUser)
authRoute.post('/refresh-token', refreshToken)

export default authRoute
