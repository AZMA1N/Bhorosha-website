import { Request, Response } from 'express';
import prisma from '../lib/prisma';

// const prisma = new PrismaClient(); // Removed

export const getResources = async (req: Request, res: Response) => {
    try {
        const experts = await prisma.expert.findMany();
        res.json(experts);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch resources' });
    }
};

export const getAdminListings = async (req: Request, res: Response) => {
    try {
        const lands = await prisma.land.findMany({
            include: { owner: true }
        });
        res.json(lands);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch listings' });
    }
};
