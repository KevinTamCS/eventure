import { Router } from 'express';
import events from '../routes/events';
import users from '../routes/users';

const router = Router();

router.use('/events', events);
router.use('/users', users);

export default router;
