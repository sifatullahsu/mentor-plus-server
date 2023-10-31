import { IQueryMakerFields, IQuerySelectorFields } from 'mongoose-query-maker'
import { iRole } from '../../../global/interface'
import { iTopic } from './topic.interface'

export const topicQuery: IQueryMakerFields<iTopic, iRole> = {
  all: 'OPEN',
  filter: [['category', ['$eq'], 'OPEN']]
}

export const topicSelector: IQuerySelectorFields = {
  select: [],
  populate: []
}
