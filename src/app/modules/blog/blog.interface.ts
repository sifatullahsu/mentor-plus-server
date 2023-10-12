import { Model } from 'mongoose'
import { iContentStatus, iId } from '../../../global/interface'

export type iBlog = {
  title: string
  slug: string
  content: string
  image: string
  category: iId
  topics: iId[]
  user: iId
  status: iContentStatus
}

export type iBlogModel = Model<iBlog>
