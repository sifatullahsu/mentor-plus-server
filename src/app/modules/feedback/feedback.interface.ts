import { Model } from 'mongoose'
import { iId } from '../../../global/interface'

export type iFeedback = {
  title: string
  description: string
  user: iId
}

export type iFeedbackModel = Model<iFeedback>
