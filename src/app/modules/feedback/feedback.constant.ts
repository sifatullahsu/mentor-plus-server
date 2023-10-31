import { IQueryMakerFields, IQuerySelectorFields } from 'mongoose-query-maker'
import { iRole } from '../../../global/interface'
import { iFeedback } from './feedback.interface'

export const feedbackQuery: IQueryMakerFields<iFeedback, iRole> = {
  all: 'OPEN',
  filter: []
}

export const feedbackSelector: IQuerySelectorFields = {
  select: [],
  populate: []
}
