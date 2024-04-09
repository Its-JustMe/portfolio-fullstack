const { transporter } = require('../helpers/transporter');
const { data } = require('../helpers/data');

module.exports = {
    sendClientEmail: async (clientData) => {

        const mailOptions = {
            from: clientData.email_client,
            to: 'arthursantos48211@gmail.com',
            subject: clientData.email_subject,
            text: `Olá, me chamo ${clientData.client_name},\n\n ${clientData.email_msg}`
        };

        transporter.sendMail(mailOptions, function (error, info) {
            if (error) {
                console.error('Erro ao enviar o e-mail:', error);
            } else {
                console.log('E-mail enviado:', info.response);
            }
        });
    }
};