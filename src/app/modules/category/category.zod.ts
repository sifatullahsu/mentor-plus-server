import { z } from 'zod'

export const createCategoryZodSchema = z.object({
  body: z.object({
    title: z.string({
      required_error: 'title is required.'
    }),
    slug: z.string().optional()
  })
})

export const updateCategoryZodSchema = z.object({
  body: z.object({
    title: z.string().optional(),
    slug: z.string().optional()
  })
})
