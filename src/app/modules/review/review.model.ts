import { Schema, model } from 'mongoose'
import { iReview, iReviewModel } from './review.interface'

const reviewSchema = new Schema<iReview, iReviewModel>(
  {
    rating: { type: Number, required: true, max: 5, min: 1 },
    title: { type: String, required: true, trim: true },
    description: { type: String, required: true, trim: true },
    service: { type: Schema.Types.ObjectId, ref: 'Service', required: true },
    user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    booking: { type: Schema.Types.ObjectId, ref: 'Booking', required: true }
  },
  {
    timestamps: true,
    versionKey: false
  }
)

const Review = model<iReview, iReviewModel>('Review', reviewSchema)

export default Review
