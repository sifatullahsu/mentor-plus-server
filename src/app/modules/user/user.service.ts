import transformObject from '../../../helper/transformObject'
import { iUser } from './user.interface'
import User from './user.mode'

export const getUsersDB = async (): Promise<iUser[] | null> => {
  const result = await User.find({})

  return result
}

export const getUserDB = async (id: string): Promise<iUser | null> => {
  const result = await User.findById(id)

  return result
}

export const updateUserDB = async (id: string, data: Partial<iUser>): Promise<iUser | null> => {
  const transform = transformObject(data)

  const result = await User.findByIdAndUpdate(id, transform, {
    runValidators: true,
    new: true
  })

  return result
}
