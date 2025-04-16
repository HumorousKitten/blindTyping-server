import express from 'express'
import { getBestResult } from './getBestResult.controller.js'
import { protect } from '../middleware/auth.middleware.js'

const router = express.Router()

router.get('/getBestResult', protect, getBestResult)

export default router


