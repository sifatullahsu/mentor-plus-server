import { Router } from 'express'
import validateRequest from '../../middlewares/validateRequest'
import { createService, deleteService, getService, getServices, updateService } from './service.controller'
import { createServiceZodSchema, updateServiceZodSchema } from './service.zod'

const serviceRoute = Router()

serviceRoute.post('/', validateRequest(createServiceZodSchema), createService)
serviceRoute.get('/', getServices)
serviceRoute.get('/:id', getService)
serviceRoute.patch('/:id', validateRequest(updateServiceZodSchema), updateService)
serviceRoute.delete('/:id', deleteService)

export default serviceRoute
