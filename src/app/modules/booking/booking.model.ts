import { Schema, model } from 'mongoose'
import { xBookingStatus, xHours } from '../../../global/constant'
import { categoryIdentity, serviceIdentity, topicIdentity, userIdentity } from '../../identity/model'
import { iBooking, iBookingModel } from './booking.interface'

const bookingSchema = new Schema<iBooking, iBookingModel>(
  {
    service: { type: Schema.Types.ObjectId, ref: 'Service', required: true, immutable: true },
    serviceDetails: { type: serviceIdentity, required: true },

    topic: { type: Schema.Types.ObjectId, ref: 'Topic', required: true, immutable: true },
    topicDetails: { type: topicIdentity, required: true },

    user: { type: Schema.Types.ObjectId, ref: 'User', required: true, immutable: true },
    userDetails: { type: userIdentity, required: true },

    category: { type: Schema.Types.ObjectId, ref: 'Category', required: true, immutable: true },
    categoryDetails: { type: categoryIdentity, required: true },

    mentor: { type: Schema.Types.ObjectId, ref: 'User', required: true, immutable: true },
    mentorDetails: { type: userIdentity, required: true },

    price: { type: Number, required: true },
    hours: { type: Number, required: true, enum: xHours },
    time: { type: Date, required: true },

    transactionId: { type: String, required: true, trim: true },
    status: { type: String, required: true, trim: true, enum: xBookingStatus, default: 'completed' }
  },
  {
    timestamps: true,
    versionKey: false
  }
)

const Booking = model<iBooking, iBookingModel>('Booking', bookingSchema)

export default Booking
