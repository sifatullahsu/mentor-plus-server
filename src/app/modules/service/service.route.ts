import { Router } from 'express'
import validateRequest from '../../middlewares/validateRequest'
import { validateRole } from '../../middlewares/validateRole'
import {
  createService,
  deleteService,
  getService,
  getServices,
  getServicesWithSearch,
  updateService
} from './service.controller'
import { createServiceZodSchema, updateServiceZodSchema } from './service.zod'

const serviceRoute = Router()

serviceRoute.post('/', validateRole(['mentor']), validateRequest(createServiceZodSchema), createService)
serviceRoute.get('/', getServices)
serviceRoute.get('/search', getServicesWithSearch)
serviceRoute.get('/:id', getService)
serviceRoute.patch(
  '/:id',
  validateRole(['mentor', 'admin']),
  validateRequest(updateServiceZodSchema),
  updateService
)
serviceRoute.delete('/:id', validateRole(['mentor', 'admin']), deleteService)

export default serviceRoute
