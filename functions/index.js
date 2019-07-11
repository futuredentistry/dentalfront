const functions = require('firebase-functions')
const admin = require('firebase-admin')
const nodemailer = require('nodemailer')
const mysql = require('mysql')

// to make it work you need gmail account
// const gmailEmail = functions.config().gmail.login
const gmailPassword = 'dddd' //functions.config().gmail.pass
admin.initializeApp()

// creating function for sending emails
const goMail = (message, email) => {
    // transporter is a way to send your emails
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'beemoinfo@gmail.com', // gmailEmail,
            pass: gmailPassword,
        },
    })

    // setup email data with unicode symbols
    // this is how your email are going to look like
    const mailOptions = {
        from: 'Contact Beemo ✔', // gmailEmail, // sender address
        to: 'beemoinfo@gmail.com', // list of receivers
        subject: `Beemo ${email}`, // Subject line
        text: `${message}`, // plain text body
        html: `${message}`, // html body
    }

    // this is callback function to return status to firebase console
    const getDeliveryStatus = (error, info) => {
        if (error) {
            return console.log(error)
        }
        console.log('Message sent: %s', info.messageId)
        // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
    }

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
    connectionLimit: 1,
    user: 'beemo',
    password: '9733a7hdgcFP4wwK',
    database: 'reports',
}

// Connection pools reuse connections between invocations,
// and handle dropped or expired connections automatically.
let mysqlPool

// Add report sql data
// exports.addReportSQL = functions.https.onCall((data) => {
//     console.log('!!!!!!!!!!!!!!!!!!!!!!!!!!!')
//     const query = data.query
//     // Checking attribute.
//     if (!(typeof query === 'string') || query.length === 0) {
//         // Throwing an HttpsError so that the client gets the error details.
//         throw new functions.https.HttpsError('invalid-argument', 'The function must be called with ' +
//             'one arguments "query" containing the report data to add.')
//     }
//     // Checking that the user is authenticated.
//     // if (!context.auth) {
//     //     // Throwing an HttpsError so that the client gets the error details.
//     //     throw new functions.https.HttpsError('failed-precondition', 'The function must be called ' + 'while authenticated.')
//     // }

//     if (!mysqlPool) {
//         mysqlPool = mysql.createPool(mysqlConfig);
//     }

//     mysqlPool.query("CREATE TABLE IF NOT EXISTS dentist (report_id varchar(255), patient_name varchar(255))",
//         (err, results) => {
//             if (err) {
//                 throw new functions.https.HttpsError('failed-precondition', err)
//             } else {
//                 mysqlPool.query('SELECT * FROM dentist', (err, results) => {
//                     if (err) {
//                         throw new functions.https.HttpsError('failed-precondition', err)
//                     } else {
//                         return results
//                     }
//                 })
//             }
//         })

//     return null
// })

exports.addReportSQL = functions.https.onCall((data = 'TEST') => {
    console.log('TEST!!!')
    return data
})