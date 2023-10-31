import { Request, Response } from 'express'
import httpStatus from 'http-status'
import { queryMaker } from 'mongoose-query-maker'
import { apiResponse, catchAsync } from '../../../shared'
import { topicQuery, topicSelector } from './topic.constaint'
import { iTopic } from './topic.interface'
import { TopicService as service } from './topic.service'

const createData = catchAsync(async (req: Request, res: Response) => {
  const result = await service.createData(req.body)

  apiResponse<iTopic>(res, {
    success: true,
    status: httpStatus.OK,
    message: 'Topic created successfull.',
    data: result
  })
})

const getAllData = catchAsync(async (req: Request, res: Response) => {
  const query = queryMaker(req.query, req.user, topicQuery, topicSelector)
  const { result, meta } = await service.getAllData(query)

  apiResponse<iTopic[]>(res, {
    success: true,
    status: httpStatus.OK,
    message: 'Topics fetched successfull.',
    data: result,
    meta
  })
})

const getData = catchAsync(async (req: Request, res: Response) => {
  const result = await service.getData(req.params.id)

  apiResponse<iTopic>(res, {
    success: true,
    status: httpStatus.OK,
    message: 'Topic fetched successfull.',
    data: result
  })
})

const updateData = catchAsync(async (req: Request, res: Response) => {
  const result = await service.updateData(req.params.id, req.body)

  apiResponse<iTopic>(res, {
    success: true,
    status: httpStatus.OK,
    message: 'Topic updated successfull.',
    data: result
  })
})

const deleteData = catchAsync(async (req: Request, res: Response) => {
  const result = await service.deleteData(req.params.id)

  apiResponse<iTopic>(res, {
    success: true,
    status: httpStatus.OK,
    message: 'Topic deleted successfull.',
    data: result
  })
})

export const TopicController = {
  createData,
  getAllData,
  getData,
  updateData,
  deleteData
}
