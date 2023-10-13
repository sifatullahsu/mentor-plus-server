import { z } from 'zod'
import { xGender, xRole, xStatus } from '../../../global/constant'

export const updateUserZodSchema = z.object({
  body: z.object({
    username: z.string().optional(),
    name: z
      .object({
        firstName: z.string().optional(),
        lastName: z.string().optional()
      })
      .optional(),
    email: z
      .object({
        address: z.string().optional(),
        is_verified: z.boolean().optional()
      })
      .optional(),
    number: z
      .object({
        cc: z.string().optional(),
        digits: z.string().optional(),
        is_verified: z.boolean().optional()
      })
      .optional(),
    // @ts-ignore
    gender: z.enum(xGender).optional(),
    password: z.string().optional(),
    // @ts-ignore
    role: z.enum(xRole).optional(),
    // @ts-ignore
    status: z.enum(xStatus).optional(),
    about: z.string().optional(),
    education: z
      .array(
        z.object({
          institute: z.string({
            required_error: 'institute is required'
          }),
          passing_year: z.number({
            required_error: 'passing_year is required'
          }),
          cgpa: z.number({
            required_error: 'cgpa is required'
          })
        })
      )
      .optional()
  })
})
