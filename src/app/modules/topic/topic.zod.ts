import { z } from 'zod'

export const createTopicZodSchema = z.object({
  body: z.object({
    title: z.string({
      required_error: 'title is required.'
    }),
    description: z.string({
      required_error: 'description is required.'
    }),
    category: z.string({
      required_error: 'category is required.'
    })
  })
})

export const updateTopicZodSchema = z.object({
  body: z.object({
    title: z.string().optional(),
    description: z.string().optional(),
    category: z.string().optional()
  })
})
