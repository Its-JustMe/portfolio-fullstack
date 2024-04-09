const transporter = require('../helpers/transporter');
const { data } = require('../helpers/data');

module.exports = {
    sendClientEmail: async (clientData, res) => {
        const msg = clientData.msg_cliente
        clientData.msg_cliente = `Olá, me chamo ${clientData.nome_cliente}, \n\n${msg}`;

        res.redirect(`mailto:${transporter.email}?subject=${clientData.assunto_cliente}&body=${msg}`);
    }
};