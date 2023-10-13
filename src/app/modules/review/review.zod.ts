import { z } from 'zod'

export const createReviewZodSchema = z.object({
  body: z.object({
    rating: z
      .number({
        required_error: 'rating is required.'
      })
      .max(5)
      .min(1),
    title: z.string({
      required_error: 'title is required.'
    }),
    description: z.string({
      required_error: 'description is required.'
    }),
    expertise: z.string({
      required_error: 'expertise is required.'
    }),
    user: z.string({
      required_error: 'user is required.'
    }),
    booking: z.string({
      required_error: 'booking is required.'
    })
  })
})

export const updateReviewZodSchema = z.object({
  body: z.object({
    rating: z.number().max(5).min(1).optional(),
    title: z.string().optional(),
    description: z.string().optional()
  })
})
