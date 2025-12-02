import { Router } from 'express';
import { getResources, getAdminListings } from '../controllers/adminController';

const router = Router();

router.get('/resources', getResources);
router.get('/listings', getAdminListings);

export default router;
