import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

export const register = async (req: Request, res: Response) => {
    try {
        const { username, email, phone, password, role } = req.body;

        // Validation
        if (!username || !email || !phone || !password) {
            return res.status(400).json({ error: 'All fields are required' });
        }

        // Check if user exists
        const existingUser = await prisma.user.findFirst({
            where: {
                OR: [
                    { email },
                    { phone },
                    { username }
                ]
            }
        });

        if (existingUser) {
            return res.status(400).json({ error: 'User already exists with these details' });
        }

        // Hash password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create user
        const user = await prisma.user.create({
            data: {
                username,
                email,
                phone,
                password: hashedPassword,
                role: role || 'LANDOWNER'
            }
        });

        res.status(201).json({ message: 'User registered successfully', userId: user.id });
    } catch (error) {
        console.error('Registration error:', error);
        res.status(500).json({ error: 'Registration failed' });
    }
};

export const login = async (req: Request, res: Response) => {
    try {
        const { username, email, phone, password, role } = req.body;

        // Find user based on role and provided credentials
        let user;
        if (role === 'ADMIN') {
            // Admin login: Email OR Phone
            if (!email && !phone) {
                return res.status(400).json({ error: 'Email or Phone is required for Admin login' });
            }
            user = await prisma.user.findFirst({
                where: {
                    role: 'ADMIN',
                    OR: [
                        { email: email || undefined },
                        { phone: phone || undefined }
                    ]
                }
            });
        } else {
            // User (Landowner) login: Username OR Email
            if (!username && !email) {
                return res.status(400).json({ error: 'Username or Email is required for login' });
            }
            user = await prisma.user.findFirst({
                where: {
                    OR: [
                        { username: username || undefined },
                        { email: email || undefined }
                    ]
                }
            });
        }

        if (!user) {
            return res.status(401).json({ error: 'Invalid credentials' });
        }

        // Verify password
        if (!user.password) {
            return res.status(401).json({ error: 'Invalid credentials (no password set)' });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(401).json({ error: 'Invalid credentials' });
        }

        // Return success (In a real app, generate JWT here)
        res.json({
            message: 'Login successful',
            user: {
                id: user.id,
                name: user.name,
                username: user.username,
                role: user.role
            }
        });

    } catch (error) {
        console.error('Login error:', error);
        res.status(500).json({ error: 'Login failed' });
    }
};
