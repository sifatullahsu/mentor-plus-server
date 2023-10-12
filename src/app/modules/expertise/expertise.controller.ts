import { Request, Response } from 'express'
import httpStatus from 'http-status'
import apiResponse from '../../../shared/apiResponse'
import catchAsync from '../../../shared/catchAsync'
import { iExpertise } from './expertise.interface'
import {
  createExpertiseDB,
  deleteExpertiseDB,
  getExpertiseDB,
  getExpertisesDB,
  updateExpertiseDB
} from './expertise.service'

export const createExpertise = catchAsync(async (req: Request, res: Response) => {
  const result = await createExpertiseDB(req.body)

  apiResponse<iExpertise>(res, {
    success: true,
    status: httpStatus.OK,
    message: 'Expertise created successfull.',
    data: result
  })
})

export const getExpertises = catchAsync(async (req: Request, res: Response) => {
  const result = await getExpertisesDB()

  apiResponse<iExpertise[]>(res, {
    success: true,
    status: httpStatus.OK,
    message: 'Expertises fetched successfull.',
    data: result
  })
})

export const getExpertise = catchAsync(async (req: Request, res: Response) => {
  const result = await getExpertiseDB(req.params.id)

  apiResponse<iExpertise>(res, {
    success: true,
    status: httpStatus.OK,
    message: 'Expertise fetched successfull.',
    data: result
  })
})

export const updateExpertise = catchAsync(async (req: Request, res: Response) => {
  const result = await updateExpertiseDB(req.params.id, req.body)

  apiResponse<iExpertise>(res, {
    success: true,
    status: httpStatus.OK,
    message: 'Expertise updated successfull.',
    data: result
  })
})

export const deleteExpertise = catchAsync(async (req: Request, res: Response) => {
  const result = await deleteExpertiseDB(req.params.id)

  apiResponse<iExpertise>(res, {
    success: true,
    status: httpStatus.OK,
    message: 'Expertise deleted successfull.',
    data: result
  })
})
