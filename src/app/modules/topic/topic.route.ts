import { Router } from 'express'
import validateRequest from '../../middlewares/validateRequest'
import { createTopic, deleteTopic, getTopic, getTopics, updateTopic } from './topic.controller'
import { createTopicZodSchema, updateTopicZodSchema } from './topic.zod'

const topicRoute = Router()

topicRoute.post('/', validateRequest(createTopicZodSchema), createTopic)
topicRoute.get('/', getTopics)
topicRoute.get('/:id', getTopic)
topicRoute.patch('/:id', validateRequest(updateTopicZodSchema), updateTopic)
topicRoute.delete('/:id', deleteTopic)

export default topicRoute
