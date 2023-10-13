import { Router } from 'express'
import validateRequest from '../../middlewares/validateRequest'
import { createBlog, deleteBlog, getBlog, getBlogs, updateBlog } from './blog.controller'
import { createBlogZodSchema, updateBlogZodSchema } from './blog.zod'

const blogRoute = Router()

blogRoute.post('/', validateRequest(createBlogZodSchema), createBlog)
blogRoute.get('/', getBlogs)
blogRoute.get('/:id', getBlog)
blogRoute.patch('/:id', validateRequest(updateBlogZodSchema), updateBlog)
blogRoute.delete('/:id', deleteBlog)

export default blogRoute
