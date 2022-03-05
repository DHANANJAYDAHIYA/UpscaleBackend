const config= {
    user:'UpscaleAdmin',
    password: 'Upscale', //
    server: 'ACERNITRO5',
    database: 'Master',
    options: {
        trustServerCertificate: true,
        trustedconnections: false,
        enabledArithAbout: true,
        instancename: 'SQLEXPRESS' //
    },
    port: 1234 // tcp ip was not on
}

module.exports = config;