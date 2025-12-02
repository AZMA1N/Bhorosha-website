import { Router } from 'express';
import { listLand, getListings } from '../controllers/landController';

const router = Router();

router.post('/list', listLand);
router.get('/listings', getListings);

export default router;
