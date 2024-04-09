const { transporter } = require('../helpers/helpers');
const { data } = require('../helpers/data');

const homeModel = {
    sendEmail: async (clientData) => {
        const mailOptions = {
            from: clientData.email_client,
            to: data.hero.email,
            subject: clientData.email_subject,
            text: clientData.email_msg
        };

        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                console.error('Erro ao enviar o email:', error);
            } else {
                console.log('Email enviado:', info.response);
            }
        });
    }
};

module.exports = homeModel;