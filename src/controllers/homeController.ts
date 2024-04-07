import { data } from '../helpers/data';
import { formData } from '../helpers/interfaces';
import { homeModel } from '../models/homeModels';
import { Request, Response } from 'express';
import { body, validationResult } from 'express-validator'

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
          'projects',
          'form'
        ]
      }
    );
  },
  /** 
   * Função que valida o formulário de email
   * @param req Request
   * @param res Response
  */
  validateForm: (req: Request, res: Response) => {
    const errors = validationResult(req);
    const { email_client, email_subject, email_msg }: formData = req.body;
  }
};