import express from 'express';
import test from './test';
import user from './user/routes';

const router = express.Router();

router.use('/user', user);


router.get('/test', test);

export default router;
