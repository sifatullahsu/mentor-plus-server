import { Model } from 'mongoose'
import { iId, iLanguages } from '../../../global/interface'

export type iExpertise = {
  title: string
  description: string
  category: iId
  mentor: iId
  topics: iId[]
  hourly_rates: number[]
  languages: iLanguages[]
}

export type iExpertiseModel = Model<iExpertise>
