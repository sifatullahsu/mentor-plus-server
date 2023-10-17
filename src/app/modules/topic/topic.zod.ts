import { z } from 'zod'

export const createTopicZodSchema = z.object({
  body: z.object({
    title: z.string({
      required_error: 'title is required.'
    }),
    slug: z.string().optional(),
    category: z.string({
      required_error: 'category is required.'
    })
  })
})

export const updateTopicZodSchema = z.object({
  body: z.object({
    title: z.string().optional(),
    slug: z.string().optional(),
    category: z.string().optional()
  })
})
