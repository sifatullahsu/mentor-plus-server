import { Request, Response } from 'express'
import httpStatus from 'http-status'
import { queryMaker } from 'mongoose-query-maker'
import { apiResponse, catchAsync } from '../../../shared'
import { bookingQuery, bookingSelector } from './booking.constant'
import { iBooking } from './booking.interface'
import { BookingService as service } from './booking.service'

const createData = catchAsync(async (req: Request, res: Response) => {
  const result = await service.createData(req.body)

  apiResponse<iBooking>(res, {
    success: true,
    status: httpStatus.OK,
    message: 'Booking created successfull.',
    data: result
  })
})

const getAllData = catchAsync(async (req: Request, res: Response) => {
  const query = queryMaker(req.query, req.user, bookingQuery, bookingSelector)
  const { result, meta } = await service.getAllData(query)

  apiResponse<iBooking[]>(res, {
    success: true,
    status: httpStatus.OK,
    message: 'Bookings fetched successfull.',
    data: result,
    meta
  })
})

const getData = catchAsync(async (req: Request, res: Response) => {
  const result = await service.getData(req.params.id)

  apiResponse<iBooking>(res, {
    success: true,
    status: httpStatus.OK,
    message: 'Booking fetched successfull.',
    data: result
  })
})

const updateData = catchAsync(async (req: Request, res: Response) => {
  const result = await service.updateData(req.params.id, req.body)

  apiResponse<iBooking>(res, {
    success: true,
    status: httpStatus.OK,
    message: 'Booking updated successfull.',
    data: result
  })
})

const deleteData = catchAsync(async (req: Request, res: Response) => {
  const result = await service.deleteData(req.params.id)

  apiResponse<iBooking>(res, {
    success: true,
    status: httpStatus.OK,
    message: 'Booking deleted successfull.',
    data: result
  })
})

export const BookingController = {
  createData,
  getAllData,
  getData,
  updateData,
  deleteData
}
