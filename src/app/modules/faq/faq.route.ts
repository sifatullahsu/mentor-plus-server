import { Router } from 'express'
import { createFaq, deleteFaq, getFaq, getFaqs, updateFaq } from './faq.controller'

const faqRoute = Router()

faqRoute.post('/', createFaq)
faqRoute.get('/', getFaqs)
faqRoute.get('/:id', getFaq)
faqRoute.patch('/:id', updateFaq)
faqRoute.delete('/:id', deleteFaq)

export default faqRoute
