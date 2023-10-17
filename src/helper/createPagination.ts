type iOrder = 'desc' | 'asc'

export type iPagination = {
  page?: number
  size?: number
  sort?: string
  order?: iOrder
}

export type iPaginationReturn = {
  page: number
  size: number
  skip: number
  sort: string
  order: iOrder
}

export const paginationQuery: string[] = ['page', 'size', 'sort', 'order']

const createPagination = (options: iPagination): iPaginationReturn => {
  const page = Number(options.page || 1)
  const size = Number(options.size || 10)
  const skip = (page - 1) * size

  const sort = options.sort || 'createdAt'
  const order = options.order || 'desc'

  return {
    page,
    size,
    skip,
    sort,
    order
  }
}

export default createPagination
