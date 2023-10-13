import { z } from 'zod'
import { xStatus } from '../../../global/constant'

export const createExpertiseZodSchema = z.object({
  body: z.object({
    title: z.string({
      required_error: 'title is required.'
    }),
    description: z.string().optional(),
    category: z.string({
      required_error: 'category is required.'
    }),
    mentor: z.string({
      required_error: 'mentor is required.'
    }),
    // @ts-ignore
    status: z.enum(xStatus).optional(),
    topics: z.array(z.string()).optional(),
    languages: z.array(z.string()).optional(),
    packages: z
      .array(
        z.object({
          title: z.string({
            required_error: 'title is required.'
          }),
          description: z.string({
            required_error: 'description is required.'
          }),
          hours: z.number({
            required_error: 'hours is required.'
          }),
          price: z.number({
            required_error: 'price is required.'
          })
        })
      )
      .optional()
  })
})

export const updateExpertiseZodSchema = z.object({
  body: z.object({
    title: z.string().optional(),
    description: z.string().optional(),
    category: z.string().optional(),
    mentor: z.string().optional(),
    // @ts-ignore
    status: z.enum(xStatus).optional(),
    topics: z.array(z.string()).optional(),
    languages: z.array(z.string()).optional(),
    packages: z
      .array(
        z.object({
          title: z.string({
            required_error: 'title is required.'
          }),
          description: z.string({
            required_error: 'description is required.'
          }),
          hours: z.number({
            required_error: 'hours is required.'
          }),
          price: z.number({
            required_error: 'price is required.'
          })
        })
      )
      .optional()
  })
})
