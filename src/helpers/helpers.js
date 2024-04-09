const nodemailer = require('nodemailer');

// Configurações para o serviço de email (exemplo com Gmail)
exports.transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'contato.arthursantosdev@gmail.com',
    pass: 'arthur2006'
  }
});