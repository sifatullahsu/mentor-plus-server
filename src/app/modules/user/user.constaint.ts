import { IQueryMakerFields, IQuerySelectorFields } from 'mongoose-query-maker'
import { iRole } from '../../../global/interface'
import { iUser } from './user.interface'

export const userQuery: IQueryMakerFields<iUser, iRole> = {
  all: 'OPEN',
  filter: [
    ['gender', ['$eq', '$ne'], 'OPEN'],
    ['status', ['$eq', '$ne'], 'OPEN'],
    ['role', ['$eq', '$ne'], 'OPEN']
  ]
}

export const userSelector: IQuerySelectorFields = {
  select: [],
  populate: []
}
