import { data } from '../helpers/helper';
import { Request, Response } from 'express';

export default {
  /**
   * Função que renderiza no navegador a página home.
   * @param req Request
   * @param res Response
   */
  renderHome: (req: Request, res: Response): void => {
    res.render(
      'pages/index', 
      {
        errors: null,
        data: data,
        partials: [
          'skills',
          'projects'
        ]
      }
    );
  }
};