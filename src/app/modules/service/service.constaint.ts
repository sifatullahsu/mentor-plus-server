import { IQueryMakerFields, IQuerySelectorFields } from 'mongoose-query-maker'
import { iRole } from '../../../global/interface'
import { iService } from './service.interface'

export const serviceQuery: IQueryMakerFields<iService, iRole> = {
  all: 'OPEN',
  filter: [
    ['category', ['$eq', '$in'], 'OPEN'],
    ['mentor', ['$eq'], [['ANY', 'OPEN']]],
    ['status', ['$eq'], 'OPEN'],
    ['languages', ['$in', '$nin'], 'OPEN'],
    ['packages.price', ['$gt', '$gte', '$lt', '$lte'], 'OPEN'],
    ['title', ['$regex'], 'OPEN']
  ]
}

export const serviceSelector: IQuerySelectorFields = {
  select: [],
  populate: [
    ['category', []],
    ['topics', []],
    ['mentor', ['password']]
  ]
}
