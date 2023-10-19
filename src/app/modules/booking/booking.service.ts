import httpStatus from 'http-status'
import ApiError from '../../../error/ApiError'
import { iMeta, iReturnWithMeta } from '../../../global/interface'
import { iQueryBuilderReturn } from '../../../helper/queryBuilder'
import transformObject from '../../../helper/transformObject'
import {
  getCategoryIdentity,
  getServiceIdentity,
  getTopicIdentity,
  getUserIdentity
} from '../../identity/utils'
import Service from '../service/service.model'
import { iBooking } from './booking.interface'
import Booking from './booking.model'

export const createBookingDB = async (data: iBooking): Promise<iBooking> => {
  // expertise, topic, user, package, paid, transactionId

  const service = await getServiceIdentity(data.service)
  if (!service) throw new ApiError(httpStatus.BAD_REQUEST, 'Service id not valid')

  const topic = await getTopicIdentity(data.topic)
  if (!topic) throw new ApiError(httpStatus.BAD_REQUEST, 'Topic id not valid')

  const validateTopicWithMentor = await Service.count({
    $and: [{ mentor: service.mentor }, { topics: { $in: data.topic } }]
  })
  if (!validateTopicWithMentor) throw new ApiError(httpStatus.BAD_REQUEST, 'Topic id not valid for mentor')

  const user = await getUserIdentity(data.user)
  if (!user || (user.role !== 'student' && user.role !== 'mentor')) {
    throw new ApiError(httpStatus.BAD_REQUEST, 'User not valid. Only student & mentor can booking.')
  }

  const category = await getCategoryIdentity(service.category)
  if (!category) throw new ApiError(httpStatus.BAD_REQUEST, 'Category id not valid')

  const mentor = await getUserIdentity(service.mentor)
  if (!mentor || mentor.role !== 'mentor') throw new ApiError(httpStatus.BAD_REQUEST, 'Mentor id not valid')

  data.serviceDetails = service
  data.topicDetails = topic
  data.userDetails = user
  data.category = service.category
  data.categoryDetails = category
  data.mentor = service.mentor
  data.mentorDetails = mentor

  const result = await Booking.create(data)

  return result
}

export const getBookingsDB = async (data: iQueryBuilderReturn): Promise<iReturnWithMeta<iBooking[]>> => {
  const { query, pagination } = data
  const { page, order, size, skip, sort } = pagination

  const result = await Booking.find(query)
    .skip(skip)
    .limit(size)
    .sort({ [sort]: order })

  const count = await Booking.count(query)

  const meta: iMeta = {
    page,
    size,
    count
  }

  return { meta, result }
}

export const getBookingDB = async (id: string): Promise<iBooking | null> => {
  const result = await Booking.findById(id).populate('service').populate('mentor').populate('user')

  return result
}

export const updateBookingDB = async (id: string, data: Partial<iBooking>): Promise<iBooking | null> => {
  const transform = transformObject(data)

  const result = await Booking.findByIdAndUpdate(id, transform, {
    runValidators: true,
    new: true
  })

  return result
}

export const deleteBookingDB = async (id: string): Promise<iBooking | null> => {
  const result = await Booking.findByIdAndDelete(id)

  return result
}
