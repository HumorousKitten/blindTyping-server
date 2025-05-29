import asyncHandler from 'express-async-handler'
import { checkUserRole } from '../services/checkUserRole.js'

export const allowRoles = (...allowedRoles) => {
  return asyncHandler(async (req, res, next) => {
    const { id } = req.user
    const { user_role } = await checkUserRole(id)
    if (!allowedRoles.includes(user_role)) {
      return res.status(403).json({ message: 'Недостаточно прав' })
    }
    req.user['user_role'] = user_role
    next()
  })
}
