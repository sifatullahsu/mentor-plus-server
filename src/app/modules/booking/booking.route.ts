import { Router } from 'express'
import validateRequest from '../../middlewares/validateRequest'
import { createBooking, deleteBooking, getBooking, getBookings, updateBooking } from './booking.controller'
import { createBookingZodSchema, updateBookingZodSchema } from './booking.zod'

const bookingRoute = Router()

bookingRoute.post('/', validateRequest(createBookingZodSchema), createBooking)
bookingRoute.get('/', getBookings)
bookingRoute.get('/:id', getBooking)
bookingRoute.patch('/:id', validateRequest(updateBookingZodSchema), updateBooking)
bookingRoute.delete('/:id', deleteBooking)

export default bookingRoute
