import Category from '../app/modules/category/category.mode'
import Expertise from '../app/modules/expertise/expertise.mode'
import Topic from '../app/modules/topic/topic.mode'
import User from '../app/modules/user/user.mode'
import { iId } from '../global/interface'
import { iCategoryIdentity, iExpertiseIdentity, iTopicIdentity, iUserIdentity } from './interface'

export const getUserIdentity = async (id: iId): Promise<iUserIdentity | null> => {
  const res = await User.findById(id, { _id: 0, username: 1, name: 1, role: 1 })

  return res
}

export const getCategoryIdentity = async (id: iId): Promise<iCategoryIdentity | null> => {
  const res = await Category.findById(id, { _id: 0, title: 1, slug: 1 })

  return res
}

export const getTopicIdentity = async (id: iId): Promise<iTopicIdentity | null> => {
  const res = await Topic.findById(id, { _id: 0, title: 1, slug: 1 })

  return res
}

export const getExpertiseIdentity = async (id: iId): Promise<iExpertiseIdentity | null> => {
  const res = await Expertise.findById(id, { _id: 0, title: 1, category: 1, mentor: 1 })

  return res
}
