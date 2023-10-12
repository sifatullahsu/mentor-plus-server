import { Schema, model } from 'mongoose'
import slugMaker from '../../../helper/slugMaker'
import { iCategory, iCategoryModel } from './category.interface'

const categorySchema = new Schema<iCategory, iCategoryModel>(
  {
    title: { type: String, required: true, trim: true },
    slug: { type: String, trim: true, default: '', unique: true }
  },
  {
    timestamps: true,
    versionKey: false
  }
)

categorySchema.pre('save', async function (next) {
  this.slug = slugMaker(this.slug ? this.slug : this.title)

  next()
})

const Category = model<iCategory, iCategoryModel>('Category', categorySchema)

export default Category
