import { z } from 'zod'
import { xGender, xStatus } from '../../../global/constant'

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
    status: z.enum(xStatus).optional()
  })
})
