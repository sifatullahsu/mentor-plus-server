import { Model } from 'mongoose'
import { iId, iLanguages, iPackages, iStatus } from '../../../global/interface'

export type iService = {
  uid: number
  title: string
  description: string
  image: string
  category: iId
  mentor: iId
  topics: iId[]
  packages: iPackages[]
  languages: iLanguages[]
  status: iStatus
}

export type iServiceModel = {
  uidGenerator(): Promise<number>
} & Model<iService>
