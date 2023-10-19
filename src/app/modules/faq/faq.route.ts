import { Router } from 'express'
import validateRequest from '../../middlewares/validateRequest'
import { validateRole } from '../../middlewares/validateRole'
import { createFaq, deleteFaq, getFaq, getFaqs, updateFaq } from './faq.controller'
import { createFaqZodSchema, updateFaqZodSchema } from './faq.zod'

const faqRoute = Router()

faqRoute.post('/', validateRole(['admin']), validateRequest(createFaqZodSchema), createFaq)
faqRoute.get('/', getFaqs)
faqRoute.get('/:id', getFaq)
faqRoute.patch('/:id', validateRole(['admin']), validateRequest(updateFaqZodSchema), updateFaq)
faqRoute.delete('/:id', validateRole(['admin']), deleteFaq)

export default faqRoute
