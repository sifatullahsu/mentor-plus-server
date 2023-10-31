import { IQueryMakerFields, IQuerySelectorFields } from 'mongoose-query-maker'
import { iRole } from '../../../global/interface'
import { iBooking } from './booking.interface'

export const bookingQuery: IQueryMakerFields<iBooking, iRole> = {
  all: 'OPEN',
  filter: [
    ['service', ['$eq'], 'OPEN'],
    ['user', ['$eq'], 'OPEN'],
    ['mentor', ['$eq'], 'OPEN'],
    ['status', ['$eq'], 'OPEN'],
    ['mentor', ['$eq', '$gt', '$gte', '$lt', '$lte'], 'OPEN'],
    ['hours', ['$eq', '$gt', '$gte', '$lt', '$lte'], 'OPEN']
  ]
}

export const bookingSelector: IQuerySelectorFields = {
  select: [],
  populate: []
}
