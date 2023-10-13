import { z } from 'zod'
import { xStatus } from '../../../global/constant'

export const createBlogZodSchema = z.object({
  body: z.object({
    title: z.string({
      required_error: 'title is required.'
    }),
    slug: z.string({
      required_error: 'slug is required.'
    }),
    content: z.string({
      required_error: 'content is required.'
    }),
    image: z.string({
      required_error: 'image is required.'
    }),
    category: z.string().optional(),
    topics: z.array(z.string()).optional(),
    user: z.string({
      required_error: 'user is required.'
    }),
    // @ts-ignore
    status: z.enum(xStatus).optional()
  })
})

export const updateBlogZodSchema = z.object({
  body: z.object({
    title: z.string().optional(),
    slug: z.string().optional(),
    content: z.string().optional(),
    image: z.string().optional(),
    category: z.string().optional(),
    topics: z.array(z.string()).optional(),
    user: z.string().optional(),
    // @ts-ignore
    status: z.enum(xStatus).optional()
  })
})
