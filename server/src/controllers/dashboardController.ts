import { Request, Response } from 'express';
import prisma from '../lib/prisma';

// const prisma = new PrismaClient(); // Removed

export const getDashboardData = async (req: Request, res: Response) => {
    // In a real app, we'd get the user ID from the auth token
    // For now, we'll just fetch the first user or mock it
    try {
        const earnings = 50000; // Mocked
        const activeProjects = await prisma.land.count({ where: { status: 'VERIFIED' } });

        res.json({
            earnings,
            activeProjects,
            feed: [
                { id: 1, title: "Harvest Started", desc: "Potato harvest has begun." },
                { id: 2, title: "Irrigation Check", desc: "System maintenance complete." }
            ]
        });
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch dashboard data' });
    }
};
