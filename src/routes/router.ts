import express, { Request, Response } from 'express';
import homeController from '../controllers/homeController';

const router = express.Router();

router.get('/', (req: Request, res: Response) => {
  homeController.renderHome(req, res);
});

router.post('/send', homeController.validationRules, (req: Request, res: Response) => {
  homeController.validateForm(req, res);
});


export default router;