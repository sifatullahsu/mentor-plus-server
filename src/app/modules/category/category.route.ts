import { Router } from 'express'
import validateRequest from '../../middlewares/validateRequest'
import {
  createCategory,
  deleteCategory,
  getCategories,
  getCategory,
  updateCategory
} from './category.controller'
import { createCategoryZodSchema, updateCategoryZodSchema } from './category.zod'

const categoryRoute = Router()

categoryRoute.post('/', validateRequest(createCategoryZodSchema), createCategory)
categoryRoute.get('/', getCategories)
categoryRoute.get('/:id', getCategory)
categoryRoute.patch('/:id', validateRequest(updateCategoryZodSchema), updateCategory)
categoryRoute.delete('/:id', deleteCategory)

export default categoryRoute
