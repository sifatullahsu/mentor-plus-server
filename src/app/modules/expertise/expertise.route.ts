import { Router } from 'express'
import {
  createExpertise,
  deleteExpertise,
  getExpertise,
  getExpertises,
  updateExpertise
} from './expertise.controller'

const expertiseRoute = Router()

expertiseRoute.post('/', createExpertise)
expertiseRoute.get('/', getExpertises)
expertiseRoute.get('/:id', getExpertise)
expertiseRoute.patch('/:id', updateExpertise)
expertiseRoute.delete('/:id', deleteExpertise)

export default expertiseRoute
