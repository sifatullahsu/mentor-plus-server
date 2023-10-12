import { Model } from 'mongoose'
import { iId, iLanguages, iPackages, iStatus } from '../../../global/interface'

export type iExpertise = {
  title: string
  description: string
  category: iId
  mentor: iId
  topics: iId[]
  packages: iPackages[]
  languages: iLanguages[]
  status: iStatus
}

export type iExpertiseModel = Model<iExpertise>
