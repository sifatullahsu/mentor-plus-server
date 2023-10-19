import { Router } from 'express'
import validateRequest from '../../middlewares/validateRequest'
import { validateRole } from '../../middlewares/validateRole'
import {
  createCategory,
  deleteCategory,
  getCategories,
  getCategory,
  updateCategory
} from './category.controller'
import { createCategoryZodSchema, updateCategoryZodSchema } from './category.zod'

const categoryRoute = Router()

categoryRoute.post('/', validateRole(['admin']), validateRequest(createCategoryZodSchema), createCategory)
categoryRoute.get('/', getCategories)
categoryRoute.get('/:id', getCategory)
categoryRoute.patch('/:id', validateRole(['admin']), validateRequest(updateCategoryZodSchema), updateCategory)
categoryRoute.delete('/:id', validateRole(['admin']), deleteCategory)

export default categoryRoute
