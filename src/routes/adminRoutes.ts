import { Router } from 'express';
import { isAuthenticated } from '../../middleware/authMiddleware';
import { Request, Response } from 'express';

const router = Router();

router.use(isAuthenticated);

router.get('/', (req: Request, res: Response) => {
  res.render('pages/admin/dashboard');
});

export default router;