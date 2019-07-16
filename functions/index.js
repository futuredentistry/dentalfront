const functions = require('firebase-functions')
const admin = require('firebase-admin')
const nodemailer = require('nodemailer')
const mysql = require('mysql')

// beemoinfo@gmail.com
// to make it work you need gmail account
let gmailEmail = ''
let gmailPassword = ''
if (process.env.NODE_ENV === 'production') {
    gmailEmail = functions.config().gmail.login
    gmailPassword = functions.config().gmail.pass
}

admin.initializeApp()

// creating function for sending emails
const goMail = (message, email) => {
    // transporter is a way to send your emails
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: gmailEmail,
            pass: gmailPassword,
        },
    })

    // setup email data with unicode symbols
    // this is how your email are going to look like
    const mailOptions = {
        from: 'Contact Beemo ✔', // gmailEmail, // sender address
        to: gmailEmail, // list of receivers
        subject: `Beemo ${email}`, // Subject line
        text: `${message}`, // plain text body
        html: `${message}`, // html body
    }

    // this is callback function to return status to firebase console
    const getDeliveryStatus = (error, info) => error && console.log(error)

    // call of this function send an email, and return status
    return transporter.sendMail(mailOptions, getDeliveryStatus)
}

// .onDataAdded is watches for changes in database
exports.onDataAdded = functions.database.ref('/contact_as/{sessionId}').onCreate((snap, context) => {
    // here we catch a new data, added to firebase database, it stored in a snap variable
    const createdData = snap.val()
    const text = createdData.message
    const mail = createdData.email

    // here we send new data using function for sending emails
    goMail(text, mail)
})


// SQL
const mysqlConfig = {
    host: '35.233.67.234',
    connectionLimit: 1,
    user: 'beemo',
    password: '9733a7hdgcFP4wwK',
    database: 'reports',
}
const connectionName = 'dental2-test:europe-west1:beemo'
if (process.env.NODE_ENV === 'production') {
    mysqlConfig.socketPath = `/cloudsql/${connectionName}`;
}

// Connection pools reuse connections between invocations,
// and handle dropped or expired connections automatically.
let mysqlPool

// Add report sql data
exports.OLDaddReportSQL = functions.https.onCall((data, context) => {

    // Checking that the user is authenticated.
    if (!context.auth) {
        // Throwing an HttpsError so that the client gets the error details.
        throw new functions.https.HttpsError('failed-precondition', 'The function must be called ' + 'while authenticated.')
    }

    if (!mysqlPool) mysqlPool = mysql.createPool(mysqlConfig);
    const today = new Date()
    mysqlPool.query(
        "INSERT INTO dentist (`id`, `name`, `organisation`, `email`, `risk`, `gum_disease`, `date`) VALUES ('2016-01-11T12:43:47.926Z', 'victor zadorozhnyy', 'Eldercare', 'antibioticvz@gmail.com', 'low', 1, " + today + ");",
        (err, results) => {
            if (err) throw new functions.https.HttpsError('failed-precondition', err)

            if (results) return results
        })

    return 'hi'
})

exports.addReportSQL = functions.https.onCall((data, context) => {
    const { id, name, organisation, email, risk, caries, gum_disease, wear, trauma, cancer, infection, other, capping, crown, filling, root_canal, tooth_extraction } = data

    // Checking that the user is authenticated.
    if (!context.auth) {
        // Throwing an HttpsError so that the client gets the error details.
        throw new functions.https.HttpsError('failed-precondition', 'The function must be called ' + 'while authenticated.')
    }

    if (!mysqlPool) mysqlPool = mysql.createPool(mysqlConfig);

    const CURRENT_DAY = mysql.raw('CURDATE()')
    const sql = mysql.format('INSERT INTO dentist(id, name, organisation, email, risk, caries, gum_disease, wear, trauma, cancer, infection, other, capping, crown, filling, root_canal, tooth_extraction, date) VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)',
        [id, name, organisation, email, risk, caries, gum_disease, wear, trauma, cancer, infection, other, capping, crown, filling, root_canal, tooth_extraction, CURRENT_DAY])

    mysqlPool.query(
        sql,
        (err, results) => {
            if (err) throw new functions.https.HttpsError('failed-precondition', err)

            if (results) return results
        })

    return null
})
