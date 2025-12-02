import { Request, Response } from 'express';
import prisma from '../lib/prisma';

// const prisma = new PrismaClient(); // Removed

export const login = async (req: Request, res: Response) => {
    const { phone, email, role } = req.body;

    try {
        let user;
        if (phone) {
            user = await prisma.user.findUnique({ where: { phone } });
        } else if (email) {
            user = await prisma.user.findUnique({ where: { email } });
        }

        if (!user) {
            // Auto-register for demo purposes if not found
            user = await prisma.user.create({
                data: {
                    phone,
                    email,
                    role: role || 'LANDOWNER',
                    name: 'New User'
                }
            });
        }

        // In a real app, we would generate and return a JWT here
        res.json({
            message: 'Login successful',
            user,
            token: 'mock-jwt-token'
        });
    } catch (error) {
        res.status(500).json({ error: 'Login failed' });
    }
};

export const verifyOtp = async (req: Request, res: Response) => {
    // Mock OTP verification
    res.json({ message: 'OTP verified successfully' });
};
