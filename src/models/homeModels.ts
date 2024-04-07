import { transporter } from '../helpers/helpers';
import { data } from '../helpers/data';

export const homeModel = {
    sendEmail: (formData: any) => {
        const mailOptions = {
            from: formData.email_client,
            to: data.hero.email,
            subject: formData.email_subject,
            text: formData.email_msg
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