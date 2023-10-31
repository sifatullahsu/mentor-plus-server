import { IQueryMakerFields, IQuerySelectorFields } from 'mongoose-query-maker'
import { iRole } from '../../../global/interface'
import { iCategory } from './category.interface'

export const categoryQuery: IQueryMakerFields<iCategory, iRole> = {
  all: 'OPEN',
  filter: []
}

export const categorySelector: IQuerySelectorFields = {
  select: [],
  populate: []
}
