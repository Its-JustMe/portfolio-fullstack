import nodemailer from 'nodemailer';

// Configurações para o serviço de email (exemplo com Gmail)
export const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'contato.arthursantosdev@gmail.com',
    pass: 'arthur2006'
  }
});