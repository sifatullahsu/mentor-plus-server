import { IQueryMakerFields, IQuerySelectorFields } from 'mongoose-query-maker'
import { iRole } from '../../../global/interface'
import { iReview } from './review.interface'

export const reviewQuery: IQueryMakerFields<iReview, iRole> = {
  all: 'OPEN',
  filter: [
    ['rating', ['$eq', '$ne', '$gt', '$gte', '$lt', '$lte'], 'OPEN'],
    ['service', ['$eq'], 'OPEN'],
    ['user', ['$eq'], 'OPEN'],
    ['booking', ['$eq'], 'OPEN']
  ]
}

export const reviewSelector: IQuerySelectorFields = {
  select: [],
  populate: []
}
