import { Router } from 'express'
import { createBlog, deleteBlog, getBlog, getBlogs, updateBlog } from './blog.controller'

const blogRoute = Router()

blogRoute.post('/', createBlog)
blogRoute.get('/', getBlogs)
blogRoute.get('/:id', getBlog)
blogRoute.patch('/:id', updateBlog)
blogRoute.delete('/:id', deleteBlog)

export default blogRoute
