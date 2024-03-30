import express, { Request, Response } from 'express';
import { homeController } from '../controllers/homeController';
const router = express.Router();

router.get('/', (req: Request, res: Response) => {
  homeController(req, res);
});


export default router;