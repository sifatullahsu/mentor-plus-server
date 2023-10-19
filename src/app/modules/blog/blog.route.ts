import { Router } from 'express'
import validateRequest from '../../middlewares/validateRequest'
import { validateRole } from '../../middlewares/validateRole'
import { createBlog, deleteBlog, getBlog, getBlogs, updateBlog } from './blog.controller'
import { createBlogZodSchema, updateBlogZodSchema } from './blog.zod'

const blogRoute = Router()

blogRoute.post(
  '/',
  validateRole(['admin', 'mentor', 'student']),
  validateRequest(createBlogZodSchema),
  createBlog
)
blogRoute.get('/', getBlogs)
blogRoute.get('/:id', getBlog)
blogRoute.patch(
  '/:id',
  validateRole(['admin', 'mentor', 'student']),
  validateRequest(updateBlogZodSchema),
  updateBlog
)
blogRoute.delete('/:id', validateRole(['admin', 'mentor', 'student']), deleteBlog)

export default blogRoute
