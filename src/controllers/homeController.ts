import * as jsonData from '../helpers/data.json';
import { Request, Response } from 'express';

export default {
  renderHome: (req: Request, res: Response): void => {
    res.render(
      'pages/index', 
      {
        errors: null,
        data: jsonData
      }
    );
  }
}