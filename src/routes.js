import express from 'express';

import api from './api/routes';

const router = express.Router();

router.use('/api', api);


export default router;
