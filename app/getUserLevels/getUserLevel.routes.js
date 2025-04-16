import { protect } from '../middleware/auth.middleware.js'
import { Router } from 'express'
import { getUserLevels } from './getUserLevels.controller.js'

const router = Router()

router.get('/getUserLevels', protect, getUserLevels)

export default router
