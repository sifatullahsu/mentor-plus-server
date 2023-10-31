import { IQueryMakerFields, IQuerySelectorFields } from 'mongoose-query-maker'
import { iRole } from '../../../global/interface'
import { iFaq } from './faq.interface'

export const faqQuery: IQueryMakerFields<iFaq, iRole> = {
  all: 'OPEN',
  filter: []
}

export const faqSelector: IQuerySelectorFields = {
  select: [],
  populate: []
}
