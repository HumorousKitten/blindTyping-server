import express from 'express'
import { getLevel } from './getLevel.controller.js'
import {protect} from '../middleware/auth.middleware.js'

const router = express.Router()

router.get('/getLevel', protect, getLevel)

export default router
