/* eslint-disable @typescript-eslint/no-explicit-any */
import httpStatus from 'http-status'
import ApiError from '../error/ApiError'
import queryPicker from '../shared/queryPicker'
import createPagination, { iPaginationReturn, paginationQuery } from './createPagination'

export type iQueryBuilderReturn = {
  query: Record<string, any>
  pagination: iPaginationReturn
}

type iParams = (receivedQuery: { [key: string]: unknown }, filterFields: string[]) => iQueryBuilderReturn

//  filterFields ==> fieldName : allowedOperation

const queryBuilder: iParams = (receviedQuery, filterFields) => {
  const pagination = createPagination(queryPicker(receviedQuery, paginationQuery))

  const operations = filterFields.map(item => item.split(':'))
  const keys = operations.map(item => item[0])
  const queryElements = queryPicker(receviedQuery!, keys)

  const $and: Record<string, any>[] = []

  Object.keys(queryElements).forEach(item => {
    const [queryType, queryData] = (queryElements[item] as string).split(':')

    // @ts-ignore
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [fieldName, allowedOperation] = operations.find(i => i[0] === item)

    // validaton 01:
    if (!allowedOperation.includes(queryType)) {
      throw new ApiError(httpStatus.BAD_REQUEST, 'Query type to authorized.')
    }

    // building query
    $and.push({ [item]: { [queryType]: queryData } })
  })

  const query = $and.length === 0 ? {} : { $and }

  return {
    query,
    pagination
  }
}

export default queryBuilder
