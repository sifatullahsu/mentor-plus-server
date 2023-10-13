import { z } from 'zod'

export const createFeedbackZodSchema = z.object({
  body: z.object({
    title: z.string({
      required_error: 'title is required.'
    }),
    description: z.string({
      required_error: 'description is required.'
    }),
    user: z.string({
      required_error: 'user is required.'
    })
  })
})

export const updateFeedbackZodSchema = z.object({
  body: z.object({
    title: z.string().optional(),
    description: z.string().optional()
  })
})
