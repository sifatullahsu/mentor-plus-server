import { Schema } from 'mongoose'
import { xRole } from '../global/constant'
import { iCategoryIdentity, iExpertiseIdentity, iTopicIdentity, iUserIdentity } from './interface'

export const userIdentity = new Schema<iUserIdentity>(
  {
    username: { type: String, required: true },
    name: {
      firstName: { type: String, required: true },
      lastName: { type: String, required: true }
    },
    role: { type: String, required: true, enum: xRole }
  },
  { _id: false }
)

export const categoryIdentity = new Schema<iCategoryIdentity>(
  {
    title: { type: String, required: true },
    slug: { type: String, required: true }
  },
  { _id: false }
)

export const topicIdentity = new Schema<iTopicIdentity>(
  {
    title: { type: String, required: true },
    slug: { type: String, required: true }
  },
  { _id: false }
)

export const expertiseIdentity = new Schema<iExpertiseIdentity>(
  {
    title: { type: String, required: true },
    category: { type: Schema.Types.ObjectId, ref: 'Category', required: true },
    mentor: { type: Schema.Types.ObjectId, ref: 'User', required: true }
  },
  { _id: false }
)
