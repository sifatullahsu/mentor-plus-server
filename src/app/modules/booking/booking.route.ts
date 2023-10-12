import { Router } from 'express'
import { createBooking, deleteBooking, getBooking, getBookings, updateBooking } from './booking.controller'

const bookingRoute = Router()

bookingRoute.post('/', createBooking)
bookingRoute.get('/', getBookings)
bookingRoute.get('/:id', getBooking)
bookingRoute.patch('/:id', updateBooking)
bookingRoute.delete('/:id', deleteBooking)

export default bookingRoute
