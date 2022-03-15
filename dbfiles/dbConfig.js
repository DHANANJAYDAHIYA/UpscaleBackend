const config= {
    user:'UpscaleM',
    password: 'Upscale', //
    server: 'ACERNITRO5',
    database: 'MentorInfo',
    options: {
        trustServerCertificate: true,
        trustedconnections: false,
        enabledArithAbout: true,
        instancename: 'SQLEXPRESS' //
    },
    port: 1234 // tcp ip was not on
}

module.exports = config;