import express from 'express'
import { getUserEmail, getUserLogin } from './getUser.controller.js'
import { protect } from '../middleware/auth.middleware.js'

const router = express.Router()

router.get('/getEmail', protect, getUserEmail)
router.get('/getLogin', protect, getUserLogin)

export default router