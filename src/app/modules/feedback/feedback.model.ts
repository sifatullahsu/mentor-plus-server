import { Schema, model } from 'mongoose'
import { iFeedback, iFeedbackModel } from './feedback.interface'

const feedbackSchema = new Schema<iFeedback, iFeedbackModel>(
  {
    title: { type: String, required: true, trim: true },
    description: { type: String, required: true, trim: true },
    user: { type: Schema.Types.ObjectId, ref: 'User', required: true }
  },
  {
    timestamps: true,
    versionKey: false
  }
)

const Feedback = model<iFeedback, iFeedbackModel>('Feedback', feedbackSchema)

export default Feedback
