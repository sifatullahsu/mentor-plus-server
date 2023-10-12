import express from 'express'
import authRoute from '../modules/auth/auth.route'
import userRoute from '../modules/user/user.route'

const AppRouter = express.Router()

AppRouter.use('/api/v1/auth', authRoute)
AppRouter.use('/api/v1/users', userRoute)

export default AppRouter
