import express from 'express';
import { updateUserRole } from './updateUserRole.controller.js';
import { protect } from '../middleware/auth.middleware.js';
import { isAdmin } from '../middleware/isAdmin.middleware.js';
const router = express.Router();

router.post('/update-role', protect, isAdmin, updateUserRole);

export default router;
