import { Router } from 'express'
import { validateRole, validateZod } from '../../middlewares'
import { CategoryController as controller } from './category.controller'
import { createCategoryZodSchema, updateCategoryZodSchema } from './category.zod'

const router = Router()

router.post('/', validateRole(['admin']), validateZod(createCategoryZodSchema), controller.createData)
router.get('/', controller.getAllData)
router.get('/:id', controller.getData)
router.patch('/:id', validateRole(['admin']), validateZod(updateCategoryZodSchema), controller.updateData)
router.delete('/:id', validateRole(['admin']), controller.deleteData)

export const CategoryRoute = router
