import {protect} from '../middleware/auth.middleware.js'
import { allowRoles } from '../middleware/allowRoles.middleware.js'
import { Router } from 'express'
import { createCourse } from './createCourse.controller.js'


const router = Router()
router.post('/newCourse', protect, allowRoles('admin', 'teacher'), createCourse)

export default router