import { transporter } from '../helpers/helpers';
import { data } from '../helpers/data';
import { formData } from '../helpers/interfaces';

export const homeModel = {
    sendEmail: async (clientData: formData) => {
        const mailOptions = {
            from: clientData.email_client,
            to: data.hero.email,
            subject: clientData.email_subject,
            text: clientData.email_msg
        };

        transporter.sendMail(mailOptions, (error: any, info: any) => {
            if (error) {
            console.error('Erro ao enviar o email:', error);
            } else {
            console.log('Email enviado:', info.response);
            }
        });
    }
};