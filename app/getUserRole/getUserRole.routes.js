import { protect } from '../middleware/auth.middleware.js'
import { Router } from 'express'
import { getUserRole } from './getUserRole.contoller.js'

const router = Router()
router.get('/role', protect, getUserRole)

export default router