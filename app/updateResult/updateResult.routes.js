import express from 'express'
import { updateResult } from './updateResult.controller.js'
import { protect } from '../middleware/auth.middleware.js'

const router = express.Router()

router.post('/updateResult', protect, updateResult)

export default router


