import { z } from 'zod'

export const createFaqZodSchema = z.object({
  body: z.object({
    title: z.string({
      required_error: 'title is required.'
    }),
    description: z.string({
      required_error: 'description is required.'
    })
  })
})

export const updateFaqZodSchema = z.object({
  body: z.object({
    title: z.string().optional(),
    description: z.string().optional()
  })
})
