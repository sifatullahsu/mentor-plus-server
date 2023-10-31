import { IQueryMaker } from 'mongoose-query-maker'
import { iMeta, iReturnWithMeta } from '../../../global/interface'
import transformObject from '../../../shared/files/transformObject'
import { iFaq } from './faq.interface'
import Faq from './faq.model'

const createData = async (data: iFaq): Promise<iFaq> => {
  const result = await Faq.create(data)

  return result
}

const getAllData = async (data: IQueryMaker): Promise<iReturnWithMeta<iFaq[]>> => {
  const { query, pagination, selector } = data
  const { page, limit, skip, sort } = pagination
  const { select, populate } = selector

  const result = await Faq.find(query).select(select).skip(skip).limit(limit).sort(sort).populate(populate)

  const count = await Faq.count(query)

  const meta: iMeta = {
    page,
    limit,
    count
  }

  return { meta, result }
}

const getData = async (id: string): Promise<iFaq | null> => {
  const result = await Faq.findById(id)

  return result
}

const updateData = async (id: string, data: Partial<iFaq>): Promise<iFaq | null> => {
  const transform = transformObject(data)

  const result = await Faq.findByIdAndUpdate(id, transform, {
    runValidators: true,
    new: true
  })

  return result
}

const deleteData = async (id: string): Promise<iFaq | null> => {
  const result = await Faq.findByIdAndDelete(id)

  return result
}

export const FaqService = {
  createData,
  getAllData,
  getData,
  updateData,
  deleteData
}
