import { IQueryMakerFields, IQuerySelectorFields } from 'mongoose-query-maker'
import { iRole } from '../../../global/interface'
import { iBlog } from './blog.interface'

export const blogQuery: IQueryMakerFields<iBlog, iRole> = {
  all: 'OPEN',
  filter: [
    ['category', ['$eq'], 'OPEN'],
    ['user', ['$eq'], 'OPEN'],
    ['status', ['$eq'], 'OPEN']
  ]
}

export const blogSelector: IQuerySelectorFields = {
  select: [],
  populate: [
    ['user', ['password']],
    ['category', []]
  ]
}
