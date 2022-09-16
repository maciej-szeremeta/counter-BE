import { HandlebarsAdapter, } from '@nestjs-modules/mailer/dist/adapters/handlebars.adapter';

export = {
  transport: {
    host: 'localhost',
    port: 2500,
    secure: false, // true for 465, false for other ports
    auth: {
      user: 'admin@hh.pl', // generated ethereal user
      pass: 'admin1', // generated ethereal password
    },
    tls: {

      // do not fail on invalid certs
      rejectUnauthorized: false,
    },
  },
  defaults: {
    from : 'admin@hh.pl',
  },
  template: {
    dir: __dirname + '/mail/templates',
    adapter: new HandlebarsAdapter(undefined, {
      inlineCssEnabled: true,
    }),
    options: {
      strict:true,
    },
  },
}