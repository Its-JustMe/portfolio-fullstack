const { data } = require('../helpers/data');
const homeModel = require('../models/homeModels');
const { validationResult, body } = require('express-validator');

module.exports = {
    /**
    * Regras de validação de dados do usuário
    */
    validationRules: [
        body('nome_cliente').notEmpty().isAlpha('pt-BR', { ignore: [' ', '-'] }).withMessage('Insira um nome válido'),
        body('assunto_cliente').escape().notEmpty().withMessage('Não pode enviar uma mensagem vazia')
    ],

    /**
     * Função que renderiza no navegador a página home.
     * @param req Request
     * @param res Response
     */
    renderHome: function (req, res) {
        res.render('pages/index', {
        errorList: null,
        data: data,
        form: null,
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


        if (!errors.isEmpty()) {
            return res.render('pages/index', {
                errorList: errors,
                data: data,
                form: req.body,
                partials: ['skills', 'projects', 'form']
            });
        
        }

        const { nome_cliente, assunto_cliente, msg_cliente } = req.body;

        try {
            homeModel.sendClientEmail({ nome_cliente, assunto_cliente, msg_cliente }, res);
        } catch (e) {
            console.log(e);
        }
    }
};