import { Model } from 'mongoose'

export type iFaq = {
  title: string
  description: string
}

export type iFaqModel = Model<iFaq>
