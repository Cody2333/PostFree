import express from 'express';

import { done } from '../config';
import create from './create';
import createSmscode from './create.smscode';
import login from './login';

const router = express.Router();

router.post('/login', done(login));
router.post('/create', done(create));
router.post('/create/smsCode', done(createSmscode));

export default router;
