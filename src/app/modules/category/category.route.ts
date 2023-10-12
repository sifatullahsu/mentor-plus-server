import { Router } from 'express'
import {
  createCategory,
  deleteCategory,
  getCategories,
  getCategory,
  updateCategory
} from './category.controller'

const categoryRoute = Router()

categoryRoute.post('/', createCategory)
categoryRoute.get('/', getCategories)
categoryRoute.get('/:id', getCategory)
categoryRoute.patch('/:id', updateCategory)
categoryRoute.delete('/:id', deleteCategory)

export default categoryRoute
