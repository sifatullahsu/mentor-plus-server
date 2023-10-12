import { Request, Response } from 'express'
import httpStatus from 'http-status'
import apiResponse from '../../../shared/apiResponse'
import catchAsync from '../../../shared/catchAsync'
import { iBooking } from './booking.interface'
import {
  createBookingDB,
  deleteBookingDB,
  getBookingDB,
  getBookingsDB,
  updateBookingDB
} from './booking.service'

export const createBooking = catchAsync(async (req: Request, res: Response) => {
  const result = await createBookingDB(req.body)

  apiResponse<iBooking>(res, {
    success: true,
    status: httpStatus.OK,
    message: 'Booking created successfull.',
    data: result
  })
})

export const getBookings = catchAsync(async (req: Request, res: Response) => {
  const result = await getBookingsDB()

  apiResponse<iBooking[]>(res, {
    success: true,
    status: httpStatus.OK,
    message: 'Bookings fetched successfull.',
    data: result
  })
})

export const getBooking = catchAsync(async (req: Request, res: Response) => {
  const result = await getBookingDB(req.params.id)

  apiResponse<iBooking>(res, {
    success: true,
    status: httpStatus.OK,
    message: 'Booking fetched successfull.',
    data: result
  })
})

export const updateBooking = catchAsync(async (req: Request, res: Response) => {
  const result = await updateBookingDB(req.params.id, req.body)

  apiResponse<iBooking>(res, {
    success: true,
    status: httpStatus.OK,
    message: 'Booking updated successfull.',
    data: result
  })
})

export const deleteBooking = catchAsync(async (req: Request, res: Response) => {
  const result = await deleteBookingDB(req.params.id)

  apiResponse<iBooking>(res, {
    success: true,
    status: httpStatus.OK,
    message: 'Booking deleted successfull.',
    data: result
  })
})
