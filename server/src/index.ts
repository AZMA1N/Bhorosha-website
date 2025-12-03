import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import prisma from './lib/prisma';

import authRoutes from './routes/authRoutes';
import landRoutes from './routes/landRoutes';
import dashboardRoutes from './routes/dashboardRoutes';
import adminRoutes from './routes/adminRoutes';

dotenv.config();

const app = express();
// const prisma = new PrismaClient(); // Removed
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Health check
app.get('/health', (req, res) => {
    res.json({ status: 'ok', message: 'Bhorosha API is running' });
});

// API Routes
app.use('/api/auth', authRoutes);
app.use('/api/land', landRoutes);
app.use('/api/landowner', dashboardRoutes);
app.use('/api/admin', adminRoutes);

// Export the app for Vercel
export default app;

// Only listen if not running in Vercel (Vercel sets VERCEL environment variable)
if (process.env.NODE_ENV !== 'production' && !process.env.VERCEL) {
    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    });
}

// Handle graceful shutdown
process.on('SIGINT', async () => {
    await prisma.$disconnect();
    process.exit(0);
});
