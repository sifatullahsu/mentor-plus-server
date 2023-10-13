import { Router } from 'express'
import validateRequest from '../../middlewares/validateRequest'
import {
  createExpertise,
  deleteExpertise,
  getExpertise,
  getExpertises,
  updateExpertise
} from './expertise.controller'
import { createExpertiseZodSchema, updateExpertiseZodSchema } from './expertise.zod'

const expertiseRoute = Router()

expertiseRoute.post('/', validateRequest(createExpertiseZodSchema), createExpertise)
expertiseRoute.get('/', getExpertises)
expertiseRoute.get('/:id', getExpertise)
expertiseRoute.patch('/:id', validateRequest(updateExpertiseZodSchema), updateExpertise)
expertiseRoute.delete('/:id', deleteExpertise)

export default expertiseRoute
