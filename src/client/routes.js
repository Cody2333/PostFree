import express from 'express';
import path from 'path';

const router = express.Router();

router.use('/', express.static(path.resolve(__dirname, 'static')));

export default router;
