import { Schema, model } from 'mongoose'
import { xContentStatus } from '../../../global/constant'
import slugMaker from '../../../shared/files/slugMaker'
import { iBlog, iBlogModel } from './blog.interface'

const blogSchema = new Schema<iBlog, iBlogModel>(
  {
    title: { type: String, required: true, trim: true },
    slug: { type: String, trim: true, unique: true, default: '' },
    content: { type: String, required: true, trim: true },
    image: { type: String, required: true, trim: true },
    category: { type: Schema.Types.ObjectId, ref: 'Category', required: true },
    topics: [{ type: Schema.Types.ObjectId, ref: 'Topic' }],
    user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    status: { type: String, required: true, enum: xContentStatus, default: 'draft' }
  },
  {
    timestamps: true,
    versionKey: false
  }
)

// blogSchema.index({ slug: 1, user: 1 }, { unique: true })

blogSchema.pre('save', async function (next) {
  this.slug = slugMaker(this.slug ? this.slug : this.title)

  next()
})

blogSchema.pre('findOneAndUpdate', async function () {
  const blog = <Partial<iBlog>>this.getUpdate()

  if (blog?.slug) {
    blog.slug = slugMaker(blog.slug)
  }
})

const Blog = model<iBlog, iBlogModel>('Blog', blogSchema)

export default Blog
