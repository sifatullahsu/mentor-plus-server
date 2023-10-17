import { isValidObjectId } from 'mongoose'
import transformObject from '../../../helper/transformObject'
import { iService } from './service.interface'
import Service from './service.model'

export const createServiceDB = async (data: iService): Promise<iService> => {
  const result = await Service.create(data)

  return result
}

export const getServicesDB = async (): Promise<iService[] | null> => {
  const result = await Service.find({}).populate('category').populate('mentor').populate('topics')

  return result
}

export const getServiceDB = async (id: string): Promise<iService | null> => {
  const query = isValidObjectId(id) ? { _id: id } : { uid: id }
  const result = await Service.findOne(query).populate('category').populate('mentor').populate('topics')

  return result
}

export const updateServiceDB = async (id: string, data: Partial<iService>): Promise<iService | null> => {
  const transform = transformObject(data)

  const result = await Service.findByIdAndUpdate(id, transform, {
    runValidators: true,
    new: true
  })

  return result
}

export const deleteServiceDB = async (id: string): Promise<iService | null> => {
  const result = await Service.findByIdAndDelete(id)

  return result
}
