import { Request, Response } from 'express'
import httpStatus from 'http-status'
import queryBuilder from '../../../helper/queryBuilder'
import apiResponse from '../../../shared/apiResponse'
import catchAsync from '../../../shared/catchAsync'
import { topicQueryFields } from './topic.constaint'
import { iTopic } from './topic.interface'
import { createTopicDB, deleteTopicDB, getTopicDB, getTopicsDB, updateTopicDB } from './topic.service'

export const createTopic = catchAsync(async (req: Request, res: Response) => {
  const result = await createTopicDB(req.body)

  apiResponse<iTopic>(res, {
    success: true,
    status: httpStatus.OK,
    message: 'Topic created successfull.',
    data: result
  })
})

export const getTopics = catchAsync(async (req: Request, res: Response) => {
  const query = queryBuilder(req.query, topicQueryFields)
  const { result, meta } = await getTopicsDB(query)

  apiResponse<iTopic[]>(res, {
    success: true,
    status: httpStatus.OK,
    message: 'Topics fetched successfull.',
    data: result,
    meta
  })
})

export const getTopic = catchAsync(async (req: Request, res: Response) => {
  const result = await getTopicDB(req.params.id)

  apiResponse<iTopic>(res, {
    success: true,
    status: httpStatus.OK,
    message: 'Topic fetched successfull.',
    data: result
  })
})

export const updateTopic = catchAsync(async (req: Request, res: Response) => {
  const result = await updateTopicDB(req.params.id, req.body)

  apiResponse<iTopic>(res, {
    success: true,
    status: httpStatus.OK,
    message: 'Topic updated successfull.',
    data: result
  })
})

export const deleteTopic = catchAsync(async (req: Request, res: Response) => {
  const result = await deleteTopicDB(req.params.id)

  apiResponse<iTopic>(res, {
    success: true,
    status: httpStatus.OK,
    message: 'Topic deleted successfull.',
    data: result
  })
})
