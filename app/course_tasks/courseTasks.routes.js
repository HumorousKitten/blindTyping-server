import { protect } from '../middleware/auth.middleware.js'
import { Router } from 'express'
import { getCourseModules } from './GET/courseTasks.controller.js'

const router = Router()

router.get('/modules', protect, getCourseModules)

export default router