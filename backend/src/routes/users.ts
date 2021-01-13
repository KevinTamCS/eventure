import { Router } from 'express';

const router = Router();

router.get('/', (req, res) => {
  console.log('Getting users...');
});

router.post('/', (req, res) => {});

export default router;
