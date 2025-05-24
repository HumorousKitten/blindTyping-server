import { protect } from '../middleware/auth.middleware.js'
import { Router } from 'express'
import { getLevelInfo } from './GET/levelInfo.controller.js'


const router = Router()

router.get('/level', protect, getLevelInfo)

export default router