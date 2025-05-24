import { protect } from '../../middleware/auth.middleware.js'
import { Router } from 'express'
import { getCourseLevels } from './getCourseLevels.controller.js'

const router = Router()

router.get('/', getCourseLevels)

export default router
