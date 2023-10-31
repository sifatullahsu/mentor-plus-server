import express from 'express'
import { AuthRoute } from '../modules/auth/auth.route'
import { BlogRoute } from '../modules/blog/blog.route'
import { BookingRoute } from '../modules/booking/booking.route'
import { CategoryRoute } from '../modules/category/category.route'
import { FaqRoute } from '../modules/faq/faq.route'
import { FeedbackRoute } from '../modules/feedback/feedback.route'
import { ReviewRoute } from '../modules/review/review.route'
import { ServiceRoute } from '../modules/service/service.route'
import { TopicRoute } from '../modules/topic/topic.route'
import { UserRoute } from '../modules/user/user.route'

const AppRouter = express.Router()

AppRouter.use('/api/v1/auth', AuthRoute)
AppRouter.use('/api/v1/users', UserRoute)
AppRouter.use('/api/v1/categories', CategoryRoute)
AppRouter.use('/api/v1/topics', TopicRoute)
AppRouter.use('/api/v1/services', ServiceRoute)
AppRouter.use('/api/v1/bookings', BookingRoute)
AppRouter.use('/api/v1/reviews', ReviewRoute)
AppRouter.use('/api/v1/feedbacks', FeedbackRoute)
AppRouter.use('/api/v1/faqs', FaqRoute)
AppRouter.use('/api/v1/blogs', BlogRoute)

export default AppRouter
