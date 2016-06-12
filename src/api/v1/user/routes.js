import express from 'express';

import { done } from '../config';
import create from './create';
import createSmscode from './create.smscode';
import login from './login';
import getUser from './get-user';

const router = express.Router();

router.post('/login', done(login));
router.post('/create', done(create));
router.post('/create/smsCode', done(createSmscode));
router.get('/:id', done(getUser));
export default router;
