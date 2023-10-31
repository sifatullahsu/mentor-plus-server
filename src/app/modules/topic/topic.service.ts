import { IQueryMaker } from 'mongoose-query-maker'
import { iMeta, iReturnWithMeta } from '../../../global/interface'
import transformObject from '../../../shared/files/transformObject'
import { iTopic } from './topic.interface'
import Topic from './topic.model'

const createData = async (data: iTopic): Promise<iTopic> => {
  const result = await Topic.create(data)

  return result
}

const getAllData = async (data: IQueryMaker): Promise<iReturnWithMeta<iTopic[]>> => {
  const { query, pagination, selector } = data
  const { page, limit, skip, sort } = pagination
  const { select, populate } = selector

  const result = await Topic.find(query)
    .select(select)
    // .populate('category')
    .skip(skip)
    .limit(limit)
    .sort(sort)
    .populate(populate)

  const count = await Topic.count(query)

  const meta: iMeta = {
    page,
    limit,
    count
  }

  return { meta, result }
}

const getData = async (id: string): Promise<iTopic | null> => {
  const result = await Topic.findById(id).populate('category')

  return result
}

const updateData = async (id: string, data: Partial<iTopic>): Promise<iTopic | null> => {
  const transform = transformObject(data)

  const result = await Topic.findByIdAndUpdate(id, transform, {
    runValidators: true,
    new: true
  })

  return result
}

const deleteData = async (id: string): Promise<iTopic | null> => {
  const result = await Topic.findByIdAndDelete(id)

  return result
}

export const TopicService = {
  createData,
  getAllData,
  getData,
  updateData,
  deleteData
}
