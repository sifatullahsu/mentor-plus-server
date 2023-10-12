import { z } from 'zod'
import { xGender, xStatus } from '../../../global/constant'

export const registerZodSchema = z.object({
  body: z.object({
    username: z.string({
      required_error: 'username is required.'
    }),
    name: z.object({
      firstName: z.string({
        required_error: 'firstName is required.'
      }),
      lastName: z.string({
        required_error: 'lastName is required.'
      })
    }),
    email: z.object({
      address: z.string({
        required_error: 'address is required.'
      }),
      is_verified: z.boolean().optional()
    }),
    number: z.object({
      cc: z.string({
        required_error: 'cc is required.'
      }),
      digits: z.string({
        required_error: 'digits is required.'
      }),
      is_verified: z.boolean().optional()
    }),
    // @ts-ignore
    gender: z.enum(xGender, {
      required_error: 'gender is required.'
    }),
    password: z.string({
      required_error: 'password is required.'
    }),
    // @ts-ignore
    status: z.enum(xStatus).optional()
  })
})

export const loginZodSchema = z.object({
  body: z.object({
    username: z.string({
      required_error: 'username is required.'
    }),
    password: z.string({
      required_error: 'password is required.'
    })
  })
})

export const refreshTokenZodSchema = z.object({
  body: z.object({
    refresh_token: z.string({
      required_error: 'refresh_token is required.'
    })
  })
})
