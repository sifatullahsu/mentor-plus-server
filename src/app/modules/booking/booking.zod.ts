import { z } from 'zod'
import { xBookingStatus } from '../../../global/constant'

export const createBookingZodSchema = z.object({
  body: z.object({
    service: z.string({
      required_error: 'service is required.'
    }),
    topic: z.string({
      required_error: 'topic is required.'
    }),
    user: z.string({
      required_error: 'user is required.'
    }),
    price: z.number({
      required_error: 'price is required.'
    }),
    hours: z.number({
      required_error: 'hours is required.'
    }),
    time: z.string({
      required_error: 'time is required.'
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
    time: z.string().optional(),
    // @ts-ignore
    status: z.enum(xBookingStatus).optional()
  })
})
