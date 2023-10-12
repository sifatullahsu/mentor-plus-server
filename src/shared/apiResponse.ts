import { Response } from 'express'

type iApiReponse<T> = {
  success: boolean
  status: number
  message: string
  meta?: {
    page?: number
    limit?: number
    count?: number
  }
  data: T | null
}

const apiResponse = <T>(res: Response, data: iApiReponse<T>): void => {
  const responseData: iApiReponse<T> = {
    success: data.success,
    status: data.status,
    message: data.message,
    meta: data?.meta && {
      page: data?.meta?.page,
      limit: data?.meta?.limit,
      count: data?.meta?.count
    },
    data: data.data
  }

  res.status(data.status).json(responseData)
}

export default apiResponse
