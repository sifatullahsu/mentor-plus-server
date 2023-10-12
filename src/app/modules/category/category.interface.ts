import { Model } from 'mongoose'

export type iCategory = {
  title: string
  slug: string
}

export type iCategoryModel = Model<iCategory>
