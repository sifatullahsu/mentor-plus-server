import { iMeta, iReturnWithMeta } from '../../../global/interface'
import { iQueryBuilderReturn } from '../../../helper/queryBuilder'
import transformObject from '../../../helper/transformObject'
import { iFaq } from './faq.interface'
import Faq from './faq.model'

export const createFaqDB = async (data: iFaq): Promise<iFaq> => {
  const result = await Faq.create(data)

  return result
}

export const getFaqsDB = async (data: iQueryBuilderReturn): Promise<iReturnWithMeta<iFaq[]>> => {
  const { query, pagination } = data
  const { page, order, size, skip, sort } = pagination

  const result = await Faq.find(query)
    .skip(skip)
    .limit(size)
    .sort({ [sort]: order })

  const count = await Faq.count(query)

  const meta: iMeta = {
    page,
    size,
    count
  }

  return { meta, result }
}

export const getFaqDB = async (id: string): Promise<iFaq | null> => {
  const result = await Faq.findById(id)

  return result
}

export const updateFaqDB = async (id: string, data: Partial<iFaq>): Promise<iFaq | null> => {
  const transform = transformObject(data)

  const result = await Faq.findByIdAndUpdate(id, transform, {
    runValidators: true,
    new: true
  })

  return result
}

export const deleteFaqDB = async (id: string): Promise<iFaq | null> => {
  const result = await Faq.findByIdAndDelete(id)

  return result
}
