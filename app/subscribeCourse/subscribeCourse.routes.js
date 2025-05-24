import { subscribeCourse } from './subscribeCourse.controller.js';
import { protect } from '../middleware/auth.middleware.js';
import { Router } from 'express';

const router = Router()

router.post('/subscribe', protect, subscribeCourse)

export default router