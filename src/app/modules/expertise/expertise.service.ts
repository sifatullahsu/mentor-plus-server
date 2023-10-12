import transformObject from '../../../helper/transformObject'
import { iExpertise } from './expertise.interface'
import Expertise from './expertise.model'

export const createExpertiseDB = async (data: iExpertise): Promise<iExpertise> => {
  const result = await Expertise.create(data)

  return result
}

export const getExpertisesDB = async (): Promise<iExpertise[] | null> => {
  const result = await Expertise.find({})

  return result
}

export const getExpertiseDB = async (id: string): Promise<iExpertise | null> => {
  const result = await Expertise.findById(id)

  return result
}

export const updateExpertiseDB = async (
  id: string,
  data: Partial<iExpertise>
): Promise<iExpertise | null> => {
  const transform = transformObject(data)

  const result = await Expertise.findByIdAndUpdate(id, transform, {
    runValidators: true,
    new: true
  })

  return result
}

export const deleteExpertiseDB = async (id: string): Promise<iExpertise | null> => {
  const result = await Expertise.findByIdAndDelete(id)

  return result
}
