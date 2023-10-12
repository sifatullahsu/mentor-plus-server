import { Schema, model } from 'mongoose'
import { iFaq, iFaqModel } from './faq.interface'

const faqSchema = new Schema<iFaq, iFaqModel>(
  {
    title: { type: String, required: true, trim: true },
    description: { type: String, required: true, trim: true }
  },
  {
    timestamps: true,
    versionKey: false
  }
)

const Faq = model<iFaq, iFaqModel>('Faq', faqSchema)

export default Faq
