import transformObject from '../../../helper/transformObject'
import { iTopic } from './topic.interface'
import Topic from './topic.mode'

export const createTopicDB = async (data: iTopic): Promise<iTopic> => {
  const result = await Topic.create(data)

  return result
}

export const getTopicsDB = async (): Promise<iTopic[] | null> => {
  const result = await Topic.find({})

  return result
}

export const getTopicDB = async (id: string): Promise<iTopic | null> => {
  const result = await Topic.findById(id)

  return result
}

export const updateTopicDB = async (id: string, data: Partial<iTopic>): Promise<iTopic | null> => {
  const transform = transformObject(data)

  const result = await Topic.findByIdAndUpdate(id, transform, {
    runValidators: true,
    new: true
  })

  return result
}

export const deleteTopicDB = async (id: string): Promise<iTopic | null> => {
  const result = await Topic.findByIdAndDelete(id)

  return result
}
