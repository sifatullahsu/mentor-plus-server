import { Model } from 'mongoose'
import { iId } from '../../../global/interface'

export type iTopic = {
  title: string
  slug: string
  category: iId
}

export type iTopicModel = Model<iTopic>
