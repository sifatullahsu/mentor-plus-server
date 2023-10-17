import { iMeta, iReturnWithMeta } from '../../../global/interface'
import { iQueryBuilderReturn } from '../../../helper/queryBuilder'
import transformObject from '../../../helper/transformObject'
import { iUser } from './user.interface'
import User from './user.model'

export const getUsersDB = async (data: iQueryBuilderReturn): Promise<iReturnWithMeta<iUser[]>> => {
  const { query, pagination } = data
  const { page, order, size, skip, sort } = pagination

  const result = await User.find(query)
    .skip(skip)
    .limit(size)
    .sort({ [sort]: order })

  const count = await User.count(query)

  const meta: iMeta = {
    page,
    size,
    count
  }

  return { meta, result }
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
