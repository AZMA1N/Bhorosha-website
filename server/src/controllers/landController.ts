import { Request, Response } from 'express';
import prisma from '../lib/prisma';

// const prisma = new PrismaClient(); // Removed

export const listLand = async (req: Request, res: Response) => {
    const { district, thana, mouza, size, unit, ownerId } = req.body;

    try {
        const land = await prisma.land.create({
            data: {
                district,
                thana,
                mouza,
                size: parseFloat(size),
                unit,
                ownerId
            }
        });

        res.json({ message: 'Land listed successfully', land });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to list land' });
    }
};

export const getListings = async (req: Request, res: Response) => {
    try {
        const lands = await prisma.land.findMany({
            include: { owner: true }
        });
        res.json(lands);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch listings' });
    }
};
