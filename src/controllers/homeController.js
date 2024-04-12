const { data } = require('../helpers/data');

module.exports = {
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
};