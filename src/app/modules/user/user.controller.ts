import { Request, Response } from 'express'
import httpStatus from 'http-status'
import queryBuilder from '../../../helper/queryBuilder'
import apiResponse from '../../../shared/apiResponse'
import catchAsync from '../../../shared/catchAsync'
import { userQueryFields } from './user.constaint'
import { iUser } from './user.interface'
import { getUserDB, getUsersDB, updateUserDB } from './user.service'

export const getUsers = catchAsync(async (req: Request, res: Response) => {
  const query = queryBuilder(req.query, userQueryFields)
  const { result, meta } = await getUsersDB(query)

  apiResponse<iUser[]>(res, {
    success: true,
    status: httpStatus.OK,
    message: 'Users fetched successfull.',
    data: result,
    meta
  })
})

export const getUser = catchAsync(async (req: Request, res: Response) => {
  const result = await getUserDB(req.params.id)

  apiResponse<iUser>(res, {
    success: true,
    status: httpStatus.OK,
    message: 'User fetched successfull.',
    data: result
  })
})

export const updateUser = catchAsync(async (req: Request, res: Response) => {
  const result = await updateUserDB(req.params.id, req.body)

  apiResponse<iUser>(res, {
    success: true,
    status: httpStatus.OK,
    message: 'User updated successfull.',
    data: result
  })
})
