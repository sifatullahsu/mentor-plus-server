import { Schema, model } from 'mongoose'
import { xBookingStatus, xHours } from '../../../global/constant'
import { categoryIdentity, expertiseIdentity, topicIdentity, userIdentity } from '../../identity/model'
import { iBooking, iBookingModel } from './booking.interface'

const bookingSchema = new Schema<iBooking, iBookingModel>(
  {
    expertise: { type: Schema.Types.ObjectId, ref: 'Expertise', required: true, immutable: true },
    expertiseDetails: { type: expertiseIdentity, required: true },

    topic: { type: Schema.Types.ObjectId, ref: 'Topic', required: true, immutable: true },
    topicDetails: { type: topicIdentity, required: true },

    user: { type: Schema.Types.ObjectId, ref: 'User', required: true, immutable: true },
    userDetails: { type: userIdentity, required: true },

    category: { type: Schema.Types.ObjectId, ref: 'Category', required: true, immutable: true },
    categoryDetails: { type: categoryIdentity, required: true },

    mentor: { type: Schema.Types.ObjectId, ref: 'User', required: true, immutable: true },
    mentorDetails: { type: userIdentity, required: true },

    package: {
      title: { type: String, required: true, trim: true },
      description: { type: String, required: true, trim: true },
      hours: { type: Number, required: true, enum: xHours },
      price: { type: Number, required: true }
    },

    paid: { type: Number, required: true },
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
