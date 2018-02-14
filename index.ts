import * as nodemailer from "nodemailer";

const mailOptions = {
    from: 'portalband@band.com.br',
    to: 'tadriano@band.com.br',
    subject: 'E-mail enviado usando Node!',
    html: '<h1>Título</h1><p>Texto!</p>'
};

const transporter = nodemailer.createTransport({
    host: "10.1.4.9",
    port: 587,
    secure: false,
    auth: {
        user: "portalband",
        pass: "plh22dQ43y"
    },
    tls: { rejectUnauthorized: false }
});


transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
        console.log(error);
    } else {
        console.log('Email enviado: ' + info.response);
    }
});