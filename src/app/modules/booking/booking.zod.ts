import { z } from 'zod'
import { xBookingStatus } from '../../../global/constant'

export const createBookingZodSchema = z.object({
  body: z.object({
    expertise: z.string({
      required_error: 'expertise is required.'
    }),
    topic: z.string({
      required_error: 'topic is required.'
    }),
    user: z.string({
      required_error: 'user is required.'
    }),
    package: z.object({
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
    }),
    paid: z.string({
      required_error: 'paid is required.'
    }),
    transactionId: z.string({
      required_error: 'transactionId is required.'
    }),
    // @ts-ignore
    status: z.enum(xBookingStatus).optional()
  })
})

export const updateBookingZodSchema = z.object({
  body: z.object({
    // @ts-ignore
    status: z.enum(xBookingStatus).optional()
  })
})
