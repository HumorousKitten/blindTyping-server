import { protect } from '../middleware/auth.middleware.js'
import { Router } from 'express'
import { getCourseModules } from './GET/courseTasks.controller.js'
import { getSubLevel } from './GET/getSubLevel.controller.js'

const router = Router()

router.get('/modules', protect, getCourseModules)
router.get('/sublevel', protect, getSubLevel)


export default router