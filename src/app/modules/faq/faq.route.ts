import { Router } from 'express'
import { validateRole, validateZod } from '../../middlewares'
import { FaqController as controller } from './faq.controller'
import { createFaqZodSchema, updateFaqZodSchema } from './faq.zod'

const router = Router()

router.post('/', validateRole(['admin']), validateZod(createFaqZodSchema), controller.createData)
router.get('/', controller.getAllData)
router.get('/:id', controller.getData)
router.patch('/:id', validateRole(['admin']), validateZod(updateFaqZodSchema), controller.updateData)
router.delete('/:id', validateRole(['admin']), controller.deleteData)

export const FaqRoute = router
