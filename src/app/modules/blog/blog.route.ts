import { Router } from 'express'
import { validateRole, validateZod } from '../../middlewares'
import { BlogController as controller } from './blog.controller'
import { createBlogZodSchema, updateBlogZodSchema } from './blog.zod'

const router = Router()

router.post(
  '/',
  validateRole(['admin', 'mentor', 'student']),
  validateZod(createBlogZodSchema),
  controller.createData
)
router.get('/', controller.getAllData)
router.get('/:id', controller.getData)
router.patch(
  '/:id',
  validateRole(['admin', 'mentor', 'student']),
  validateZod(updateBlogZodSchema),
  controller.updateData
)
router.delete('/:id', validateRole(['admin', 'mentor', 'student']), controller.deleteData)

export const BlogRoute = router
