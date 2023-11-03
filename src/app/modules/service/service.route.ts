import { Router } from 'express'
import { validateRole, validateZod } from '../../middlewares'
import { ServiceController as controller } from './service.controller'
import { createServiceZodSchema, updateServiceZodSchema } from './service.zod'

const router = Router()

router.post('/', validateRole(['mentor']), validateZod(createServiceZodSchema), controller.createData)
router.get('/', controller.getAllData)
router.get('/:id', controller.getData)
router.patch(
  '/:id',
  validateRole(['mentor', 'admin']),
  validateZod(updateServiceZodSchema),
  controller.updateData
)
router.delete('/:id', validateRole(['mentor', 'admin']), controller.deleteData)

export const ServiceRoute = router
