import { Router } from 'express'
import validateRequest from '../../middlewares/validateRequest'
import { validateRole } from '../../middlewares/validateRole'
import { createBooking, deleteBooking, getBooking, getBookings, updateBooking } from './booking.controller'
import { createBookingZodSchema, updateBookingZodSchema } from './booking.zod'

const bookingRoute = Router()

bookingRoute.post(
  '/',
  validateRole(['mentor', 'student']),
  validateRequest(createBookingZodSchema),
  createBooking
)
bookingRoute.get('/', getBookings)
bookingRoute.get('/:id', getBooking)
bookingRoute.patch(
  '/:id',
  validateRole(['admin', 'mentor', 'student']),
  validateRequest(updateBookingZodSchema),
  updateBooking
)
bookingRoute.delete('/:id', validateRole([]), deleteBooking)

export default bookingRoute
