import { IQueryMaker } from 'mongoose-query-maker'
import { iMeta, iReturnWithMeta } from '../../../global/interface'
import transformObject from '../../../shared/files/transformObject'
import { iCategory } from './category.interface'
import Category from './category.model'

const createData = async (data: iCategory): Promise<iCategory> => {
  const result = await Category.create(data)

  return result
}

const getAllData = async (data: IQueryMaker): Promise<iReturnWithMeta<iCategory[]>> => {
  const { query, pagination, selector } = data
  const { page, limit, skip, sort } = pagination
  const { select, populate } = selector

  const result = await Category.find(query)
    .select(select)
    .skip(skip)
    .limit(limit)
    .sort(sort)
    .populate(populate)

  const count = await Category.count(query)

  const meta: iMeta = {
    page,
    limit,
    count
  }

  return { meta, result }
}

const getData = async (id: string): Promise<iCategory | null> => {
  const result = await Category.findById(id)

  return result
}

const updateData = async (id: string, data: Partial<iCategory>): Promise<iCategory | null> => {
  const transform = transformObject(data)

  const result = await Category.findByIdAndUpdate(id, transform, {
    runValidators: true,
    new: true
  })

  return result
}

const deleteData = async (id: string): Promise<iCategory | null> => {
  const result = await Category.findByIdAndDelete(id)

  return result
}

export const CategoryService = {
  createData,
  getAllData,
  getData,
  updateData,
  deleteData
}
