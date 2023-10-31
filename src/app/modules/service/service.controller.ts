import { Request, Response } from 'express'
import httpStatus from 'http-status'
import { queryMaker } from 'mongoose-query-maker'
import { apiResponse, catchAsync } from '../../../shared'
import { serviceQuery, serviceSelector } from './service.constaint'
import { iService } from './service.interface'
import { ServiceService as service } from './service.service'

const createData = catchAsync(async (req: Request, res: Response) => {
  const result = await service.createData(req.body)

  apiResponse<iService>(res, {
    success: true,
    status: httpStatus.OK,
    message: 'Service created successfull.',
    data: result
  })
})

const getAllData = catchAsync(async (req: Request, res: Response) => {
  const query = queryMaker(req.query, req.user, serviceQuery, serviceSelector)
  const { result, meta } = await service.getAllData(query)

  apiResponse<iService[]>(res, {
    success: true,
    status: httpStatus.OK,
    message: 'Services fetched successfull.',
    data: result,
    meta
  })
})

// export const getServicesWithSearch = catchAsync(async (req: Request, res: Response) => {
//   const pagination = createPagination(queryPicker(req.query, paginationQuery))
//   const query = queryPicker(req.query, ['search', 'min', 'max', 'category'])

//   const { result, meta } = await getServicesWithSearchDB(pagination, query)

//   apiResponse<iService[]>(res, {
//     success: true,
//     status: httpStatus.OK,
//     message: 'Services fetched successfull.',
//     data: result,
//     meta
//   })
// })

const getData = catchAsync(async (req: Request, res: Response) => {
  const result = await service.getData(req.params.id)

  apiResponse<iService>(res, {
    success: true,
    status: httpStatus.OK,
    message: 'Service fetched successfull.',
    data: result
  })
})

const updateData = catchAsync(async (req: Request, res: Response) => {
  const result = await service.updateData(req.params.id, req.body)

  apiResponse<iService>(res, {
    success: true,
    status: httpStatus.OK,
    message: 'Service updated successfull.',
    data: result
  })
})

const deleteData = catchAsync(async (req: Request, res: Response) => {
  const result = await service.deleteData(req.params.id)

  apiResponse<iService>(res, {
    success: true,
    status: httpStatus.OK,
    message: 'Service deleted successfull.',
    data: result
  })
})

export const ServiceController = {
  createData,
  getAllData,
  getData,
  updateData,
  deleteData
}
