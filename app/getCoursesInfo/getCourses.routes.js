import express from 'express'
import {protect} from '../middleware/auth.middleware.js'
import { getCourses } from './getCourses.controller.js'
import { getCourseDetails } from './getCourseDetails.controller.js'
import { checkSubscribe } from './checkSubscribe.controller.js'

const router = express.Router()

router.get('/', protect, getCourses)
router.get('/course_details', protect, getCourseDetails)
router.get('/subscribe', protect, checkSubscribe)

export default router
