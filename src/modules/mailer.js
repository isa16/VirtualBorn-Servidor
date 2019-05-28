const nodemailer = require('nodemailer');
const hbs = require('nodemailer-express-handlebars');
const path = require('path');
const exphbs = require('express-handlebars');

const { driver, host, port, user, pass } = require('../config/mail.json');

const transport = nodemailer.createTransport({
    driver,
    host,
    port,
    auth: {
        user,
        pass
    }
});

// : Path.resolve('../../src/resources/mail/')
const viewPath = path.resolve("./src/resources/mail/");

transport.use(
    'compile', 
    hbs({
        viewEngine: exphbs.create({
            partialsDir: "./src/resources/mail/partials"
        }),
        viewPath,
        extName: '.html',
    })
);
module.exports = transport;