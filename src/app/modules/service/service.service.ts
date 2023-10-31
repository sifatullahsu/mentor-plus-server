import { isValidObjectId } from 'mongoose'
import { IQueryMaker } from 'mongoose-query-maker'
import { iMeta, iReturnWithMeta } from '../../../global/interface'
import transformObject from '../../../shared/files/transformObject'
import { iService } from './service.interface'
import Service from './service.model'

const createData = async (data: iService): Promise<iService> => {
  const result = await Service.create(data)

  return result
}

const getAllData = async (data: IQueryMaker): Promise<iReturnWithMeta<iService[]>> => {
  const { query, pagination, selector } = data
  const { page, limit, skip, sort } = pagination
  const { select, populate } = selector

  const result = await Service.find(query)
    .select(select)
    // .populate('category')
    // .populate('mentor')
    // .populate('topics')
    .skip(skip)
    .limit(limit)
    .sort(sort)
    .populate(populate)

  const count = await Service.count(query)

  const meta: iMeta = {
    page,
    limit,
    count
  }

  return { meta, result }
}

//  const getServicesWithSearchDB = async (
//   pagination: iPaginationReturn,
//   query: Record<string, unknown>
// ): Promise<iReturnWithMeta<iService[]>> => {
//   const { page, order, size, skip, sort } = pagination

//   const $and = []

//   if (query?.search) {
//     $and.push({ title: { $regex: new RegExp(query.search as string, 'i') } })
//   }
//   if (query?.min) {
//     $and.push({ 'packages.price': { $gte: query.min } })
//   }
//   if (query?.max) {
//     $and.push({ 'packages.price': { $lte: query.max } })
//   }
//   if (query?.category) {
//     $and.push({ category: { $eq: query.category } })
//   }

//   const finalQuery = $and.length > 0 ? { $and } : {}

//   const result = await Service.find(finalQuery)
//     .populate('category')
//     .populate('mentor')
//     .populate('topics')
//     .skip(skip)
//     .limit(size)
//     .sort({ [sort]: order })

//   const count = await Service.count(finalQuery)

//   const meta: iMeta = {
//     page,
//     size,
//     count
//   }

//   return { meta, result }
// }

const getData = async (id: string): Promise<iService | null> => {
  const query = isValidObjectId(id) ? { _id: id } : { uid: id }
  const result = await Service.findOne(query).populate('category').populate('mentor').populate('topics')

  return result
}

const updateData = async (id: string, data: Partial<iService>): Promise<iService | null> => {
  const transform = transformObject(data)

  const result = await Service.findByIdAndUpdate(id, transform, {
    runValidators: true,
    new: true
  })

  return result
}

const deleteData = async (id: string): Promise<iService | null> => {
  const result = await Service.findByIdAndDelete(id)

  return result
}

export const ServiceService = {
  createData,
  getAllData,
  getData,
  updateData,
  deleteData
}
