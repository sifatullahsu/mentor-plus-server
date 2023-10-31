import { Router } from 'express'
import { validateRole, validateZod } from '../../middlewares'
import { BookingController as controller } from './booking.controller'
import { createBookingZodSchema, updateBookingZodSchema } from './booking.zod'

const router = Router()

router.post(
  '/',
  validateRole(['mentor', 'student']),
  validateZod(createBookingZodSchema),
  controller.createData
)
router.get('/', controller.getAllData)
router.get('/:id', controller.getData)
router.patch(
  '/:id',
  validateRole(['admin', 'mentor', 'student']),
  validateZod(updateBookingZodSchema),
  controller.updateData
)
router.delete('/:id', validateRole([]), controller.deleteData)

export const BookingRoute = router
