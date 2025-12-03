import express from 'express';
import { login, register } from '../controllers/authController';

const router = express.Router();

router.post('/register', register);
router.post('/login', login);

// Keep existing OTP routes if needed, or remove if fully replacing.
// For now, I'll comment them out or leave them if they don't conflict.
// Since the user asked for password auth, I'm prioritizing that.
// router.post('/send-otp', sendOtp);
// router.post('/verify-otp', verifyOtp);

export default router;
