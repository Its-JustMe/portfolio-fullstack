const { data } = require('../helpers/data');
const { homeModel } = require('../models/homeModels');
const { validationResult, body } = require('express-validator');

module.exports = {
  /**
   * Regras de validação de dados do usuário
   */
  validationRules: [
    body('nome_cliente').notEmpty().isAlpha('pt-BR', { ignore: [' ', '-'] }).withMessage('Insira um nome válido'),
    body('email_cliente').notEmpty().isEmail().withMessage('Insira um endereço de email válido'),
    body('assunto_cliente').escape().notEmpty().withMessage('Não pode enviar uma mensagem vazia')
  ],

  /**
   * Função que renderiza no navegador a página home.
   * @param req Request
   * @param res Response
   * @param errors Objeto com erros de validação ou parâmetro nulo
   */
  renderHome: function (req, res) {
    res.render('pages/index', {
      errors: null,
      data: data,
      partials: ['skills', 'projects', 'form']
    });
  },

  /**
   * Função que valida o formulário de email
   * @param req Request
   * @param res Response
   */
  validateForm: function (req, res) {
    const errors = validationResult(req);
    const { email_client, email_subject, email_msg } = req.body;

    try {
      homeModel.sendEmail({ email_client, email_subject, email_msg });
    } catch (e) {
      console.log(e);

      res.render('pages/index', {
        errors: errors,
        data: data,
        partials: ['skills', 'projects', 'form']
      });
    }

    res.redirect("/");
  }
};
