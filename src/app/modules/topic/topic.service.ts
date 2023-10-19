import { iMeta, iReturnWithMeta } from '../../../global/interface'
import { iQueryBuilderReturn } from '../../../helper/queryBuilder'
import transformObject from '../../../helper/transformObject'
import { iTopic } from './topic.interface'
import Topic from './topic.model'

export const createTopicDB = async (data: iTopic): Promise<iTopic> => {
  const result = await Topic.create(data)

  return result
}

export const getTopicsDB = async (data: iQueryBuilderReturn): Promise<iReturnWithMeta<iTopic[]>> => {
  const { query, pagination } = data
  const { page, order, size, skip, sort } = pagination

  const result = await Topic.find(query)
    .populate('category')
    .skip(skip)
    .limit(size)
    .sort({ [sort]: order })

  const count = await Topic.count(query)

  const meta: iMeta = {
    page,
    size,
    count
  }

  return { meta, result }
}

export const getTopicDB = async (id: string): Promise<iTopic | null> => {
  const result = await Topic.findById(id).populate('category')

  return result
}

export const updateTopicDB = async (id: string, data: Partial<iTopic>): Promise<iTopic | null> => {
  const transform = transformObject(data)

  const result = await Topic.findByIdAndUpdate(id, transform, {
    runValidators: true,
    new: true
  })

  return result
}

export const deleteTopicDB = async (id: string): Promise<iTopic | null> => {
  const result = await Topic.findByIdAndDelete(id)

  return result
}
