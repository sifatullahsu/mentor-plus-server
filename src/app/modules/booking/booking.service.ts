import httpStatus from 'http-status'
import { IQueryMaker } from 'mongoose-query-maker'
import stripePackage from 'stripe'
import config from '../../../config'
import ApiError from '../../../error/ApiError'
import { iMeta, iReturnWithMeta } from '../../../global/interface'
import transformObject from '../../../shared/files/transformObject'
import {
  getCategoryIdentity,
  getServiceIdentity,
  getTopicIdentity,
  getUserIdentity
} from '../../identity/utils'
import Service from '../service/service.model'
import { iBooking } from './booking.interface'
import Booking from './booking.model'

const createData = async (data: iBooking): Promise<iBooking> => {
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

const getAllData = async (data: IQueryMaker): Promise<iReturnWithMeta<iBooking[]>> => {
  const { query, pagination, selector } = data
  const { page, limit, skip, sort } = pagination
  const { select, populate } = selector

  const result = await Booking.find(query)
    .select(select)
    .skip(skip)
    .limit(limit)
    .sort(sort)
    .populate(populate)

  const count = await Booking.count(query)

  const meta: iMeta = {
    page,
    limit,
    count
  }

  return { meta, result }
}

const getData = async (id: string): Promise<iBooking | null> => {
  const result = await Booking.findById(id).populate('service').populate('mentor').populate('user')

  return result
}

const updateData = async (id: string, data: Partial<iBooking>): Promise<iBooking | null> => {
  const transform = transformObject(data)

  const result = await Booking.findByIdAndUpdate(id, transform, {
    runValidators: true,
    new: true
  })

  return result
}

const deleteData = async (id: string): Promise<iBooking | null> => {
  const result = await Booking.findByIdAndDelete(id)

  return result
}

const paymentIntent = async (data: Pick<iBooking, 'price'>): Promise<Record<string, string | null>> => {
  const stripe = new stripePackage(config.stripe.secret as string)

  const paymentIntent = await stripe.paymentIntents.create({
    amount: data.price * 100,
    currency: 'usd',
    payment_method_types: ['card']
  })

  return {
    publishableKey: config.stripe.private as string,
    clientSecret: paymentIntent.client_secret
  }
}

export const BookingService = {
  createData,
  getAllData,
  getData,
  updateData,
  deleteData,
  paymentIntent
}
