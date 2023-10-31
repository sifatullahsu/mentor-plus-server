import { Router } from 'express'
import { validateZod } from '../../middlewares'
import { TopicController as controller } from './topic.controller'
import { createTopicZodSchema, updateTopicZodSchema } from './topic.zod'

const router = Router()

router.post('/', validateZod(createTopicZodSchema), controller.createData)
router.get('/', controller.getAllData)
router.get('/:id', controller.getData)
router.patch('/:id', validateZod(updateTopicZodSchema), controller.updateData)
router.delete('/:id', controller.deleteData)

export const TopicRoute = router
