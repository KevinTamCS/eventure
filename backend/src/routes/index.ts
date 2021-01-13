import { Router } from 'express';
import events from '../routes/events';
import users from '../routes/users';
import auth from './auth';
import root from './root';

const router = Router();

router.use('/events', events);
router.use('/users', users);
router.use('/', auth);
router.use('/', root);

export default router;
