import express from 'express';

import api from './api/routes';
import client from './client/routes';
const router = express.Router();

router.use('/api', api);
router.use('/client', client);

export default router;
