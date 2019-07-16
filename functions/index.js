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
exports.searchReportSQL = functions.https.onCall((data, context) => {
    const { organisation, risk, caries, gum_disease, wear, trauma, cancer, infection, other, capping, crown, filling, root_canal, tooth_extraction, date_start, date_finish } = data

    // Checking that the user is authenticated.
    if (!context.auth) {
        // Throwing an HttpsError so that the client gets the error details.
        throw new functions.https.HttpsError('failed-precondition', 'The function must be called ' + 'while authenticated.')
    }

    if (!mysqlPool) mysqlPool = mysql.createPool(mysqlConfig);

    const CURRENT_DAY = mysql.raw('CURDATE()')
    // const convertTimestamp = date => mysql.raw(`DATE_FORMAT(FROM_UNIXTIME(${date}), '%e %b %Y')`)
    console.log(date_start)
    let DAY_START = date_start ? mysql.raw(`DATE_FORMAT(${date_start}, 'Y-m-d')`) : '2010-01-01'
    let DAY_FINISH = date_finish ? mysql.raw(`DATE_FORMAT(${date_finish}, 'Y-m-d')`) : CURRENT_DAY

    // console.log('>>>>>>>>>> DAY_FINISH')
    // console.log(DAY_FINISH)
    const sql = mysql.format(
        'SELECT * FROM dentist WHERE organisation IN (?) AND risk IN (?) AND (caries=? OR gum_disease=? OR wear=? OR trauma=? OR cancer=? OR infection=? OR other=? OR capping=? OR crown=? OR filling=? OR root_canal=? OR tooth_extraction=?) AND date >=? AND date <=?',
        [organisation, risk, caries, gum_disease, wear, trauma, cancer, infection, other, capping, crown, filling, root_canal, tooth_extraction, DAY_START, DAY_FINISH]
    )

    // console.log(sql)

    return new Promise((resolve) => {
        mysqlPool.query(
            sql,
            (err, results) => {
                if (err) throw new functions.https.HttpsError('failed-precondition', err)

                return resolve(results)
            })

    })
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
