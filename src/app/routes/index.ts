import express from 'express'
import authRoute from '../modules/auth/auth.route'
import blogRoute from '../modules/blog/blog.route'
import bookingRoute from '../modules/booking/booking.route'
import categoryRoute from '../modules/category/category.route'
import faqRoute from '../modules/faq/faq.route'
import feedbackRoute from '../modules/feedback/feedback.route'
import reviewRoute from '../modules/review/review.route'
import serviceRoute from '../modules/service/service.route'
import topicRoute from '../modules/topic/topic.route'
import userRoute from '../modules/user/user.route'

const AppRouter = express.Router()

AppRouter.use('/api/v1/auth', authRoute)
AppRouter.use('/api/v1/users', userRoute)
AppRouter.use('/api/v1/categories', categoryRoute)
AppRouter.use('/api/v1/topics', topicRoute)
AppRouter.use('/api/v1/services', serviceRoute)
AppRouter.use('/api/v1/bookings', bookingRoute)
AppRouter.use('/api/v1/reviews', reviewRoute)
AppRouter.use('/api/v1/feedbacks', feedbackRoute)
AppRouter.use('/api/v1/faqs', faqRoute)
AppRouter.use('/api/v1/blogs', blogRoute)

export default AppRouter
