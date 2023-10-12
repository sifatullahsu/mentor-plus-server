import transformObject from '../../../helper/transformObject'
import { iCategory } from './category.interface'
import Category from './category.mode'

export const createCategoryDB = async (data: iCategory): Promise<iCategory> => {
  const result = await Category.create(data)

  return result
}

export const getCategoriesDB = async (): Promise<iCategory[] | null> => {
  const result = await Category.find({})

  return result
}

export const getCategoryDB = async (id: string): Promise<iCategory | null> => {
  const result = await Category.findById(id)

  return result
}

export const updateCategoryDB = async (id: string, data: Partial<iCategory>): Promise<iCategory | null> => {
  const transform = transformObject(data)

  const result = await Category.findByIdAndUpdate(id, transform, {
    runValidators: true,
    new: true
  })

  return result
}

export const deleteCategoryDB = async (id: string): Promise<iCategory | null> => {
  const result = await Category.findByIdAndDelete(id)

  return result
}
