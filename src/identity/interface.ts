import { iId, iName, iRole } from '../global/interface'

export type iUserIdentity = {
  username: string
  name: iName
  role: iRole
}

export type iCategoryIdentity = {
  title: string
  slug: string
}

export type iTopicIdentity = {
  title: string
  slug: string
}

export type iExpertiseIdentity = {
  title: string
  category: iId
  mentor: iId
}
