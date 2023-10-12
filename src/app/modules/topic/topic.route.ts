import { Router } from 'express'
import { createTopic, deleteTopic, getTopic, getTopics, updateTopic } from './topic.controller'

const topicRoute = Router()

topicRoute.post('/', createTopic)
topicRoute.get('/', getTopics)
topicRoute.get('/:id', getTopic)
topicRoute.patch('/:id', updateTopic)
topicRoute.delete('/:id', deleteTopic)

export default topicRoute
