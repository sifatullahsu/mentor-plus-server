import httpStatus from 'http-status'
import ApiError from '../../../error/ApiError'
import transformObject from '../../../helper/transformObject'
import {
  getCategoryIdentity,
  getExpertiseIdentity,
  getTopicIdentity,
  getUserIdentity
} from '../../../identity/utils'
import Expertise from '../expertise/expertise.mode'
import { iBooking } from './booking.interface'
import Booking from './booking.mode'

export const createBookingDB = async (data: iBooking): Promise<iBooking> => {
  // expertise, topic, user, package, paid, transactionId

  const expertise = await getExpertiseIdentity(data.expertise)
  if (!expertise) throw new ApiError(httpStatus.BAD_REQUEST, 'Expertise id not valid')

  const topic = await getTopicIdentity(data.topic)
  if (!topic) throw new ApiError(httpStatus.BAD_REQUEST, 'Topic id not valid')

  const validateTopicWithMentor = await Expertise.count({
    $and: [{ mentor: expertise.mentor }, { topics: { $in: data.topic } }]
  })
  if (!validateTopicWithMentor) throw new ApiError(httpStatus.BAD_REQUEST, 'Topic id not valid for mentor')

  const user = await getUserIdentity(data.user)
  if (!user || user.role !== 'student') throw new ApiError(httpStatus.BAD_REQUEST, 'User id not valid')

  const category = await getCategoryIdentity(expertise.category)
  if (!category) throw new ApiError(httpStatus.BAD_REQUEST, 'Category id not valid')

  const mentor = await getUserIdentity(expertise.mentor)
  if (!mentor || mentor.role !== 'mentor') throw new ApiError(httpStatus.BAD_REQUEST, 'Mentor id not valid')

  data.expertiseDetails = expertise
  data.topicDetails = topic
  data.userDetails = user
  data.category = expertise.category
  data.categoryDetails = category
  data.mentor = expertise.mentor
  data.mentorDetails = mentor

  const result = await Booking.create(data)

  return result
}

export const getBookingsDB = async (): Promise<iBooking[] | null> => {
  const result = await Booking.find({})

  return result
}

export const getBookingDB = async (id: string): Promise<iBooking | null> => {
  const result = await Booking.findById(id)

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
