import { NextFunction, Request, Response } from 'express'
import httpStatus from 'http-status'
import config from '../../config'
import ApiError from '../../error/ApiError'
import { iRole } from '../../global/interface'
import { verifyToken } from '../../helper/jwtHelper'
import { iJwtUser } from '../../interface'

export const validateRole = (roles: iRole[]) => {
  return (req: Request, res: Response, next: NextFunction) => {
    try {
      const token = req.headers.authorization
      if (!token) throw new ApiError(httpStatus.UNAUTHORIZED, 'Unauthorized access')

      const verifyUser = verifyToken(token, config.jwt.secret as string)
      if (!roles.includes(verifyUser.role)) throw new ApiError(httpStatus.FORBIDDEN, 'Forbidden access')

      req.user = verifyUser as iJwtUser

      next()
    } catch (error) {
      next(error)
    }
  }
}
