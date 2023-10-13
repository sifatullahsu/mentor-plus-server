import { Router } from 'express'
import validateRequest from '../../middlewares/validateRequest'
import { createFaq, deleteFaq, getFaq, getFaqs, updateFaq } from './faq.controller'
import { createFaqZodSchema, updateFaqZodSchema } from './faq.zod'

const faqRoute = Router()

faqRoute.post('/', validateRequest(createFaqZodSchema), createFaq)
faqRoute.get('/', getFaqs)
faqRoute.get('/:id', getFaq)
faqRoute.patch('/:id', validateRequest(updateFaqZodSchema), updateFaq)
faqRoute.delete('/:id', deleteFaq)

export default faqRoute
