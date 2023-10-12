import { Schema, model } from 'mongoose'
import slugMaker from '../../../helper/slugMaker'
import { iTopic, iTopicModel } from './topic.interface'

const topicSchema = new Schema<iTopic, iTopicModel>(
  {
    title: { type: String, required: true, trim: true },
    slug: { type: String, trim: true, default: '', unique: true },
    category: { type: Schema.Types.ObjectId, ref: 'Category', required: true }
  },
  {
    timestamps: true,
    versionKey: false
  }
)

topicSchema.pre('save', async function (next) {
  this.slug = slugMaker(this.slug ? this.slug : this.title)

  next()
})

const Topic = model<iTopic, iTopicModel>('Topic', topicSchema)

export default Topic
