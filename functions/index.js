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
const goMail = async (message, to, from, subject) => {
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
        from: `Beemo ${from} ✔`, // sender address
        to: to, // list of receivers
        subject: `Beemo ${subject}`, // Subject line
        text: `${message}`, // plain text body
        html: `${message}`, // html body
    }

    try {
        await transporter.sendMail(mailOptions)
    } catch (error) {
        console.error('There was an error while sending the email:', error)
    }
    return null
}

// .onDataAdded is watches for changes in database
exports.onDataAdded = functions.database.ref('/contact_as/{sessionId}').onCreate((snap, context) => {
    // here we catch a new data, added to firebase database, it stored in a snap variable
    const createdData = snap.val()
    const message = createdData.message
    const mail = createdData.email
    const from = 'ContactUs'

    // here we send new data using function for sending emails
    goMail(message, gmailEmail, from, mail)
})

//.onDataAdded is watches for changes in database
exports.onDataAddedPatientReport = functions.database.ref('/patient_report/{sessionId}').onCreate((snap, context) => {
    // here we catch a new data, added to firebase database, it stored in a snap variable
    const createdData = snap.val()
    const message = createdData.message
    const to = createdData.email
    const subject = 'Dentist Report'

    // here we send new data using function for sending emails
    goMail(message, to, gmailEmail, subject)
})


// SQL
let dbsqlUser = process.env.REACT_APP_DBSQL_USER
let dbsqlPassword = process.env.REACT_APP_DBSQL_PASSWORD

if (process.env.NODE_ENV === 'production') {
    dbsqlUser = functions.config().dbsql.user
    dbsqlPassword = functions.config().dbsql.password
}

const mysqlConfig = {
    host: '35.233.67.234',
    connectionLimit: 1,
    user: dbsqlUser,
    password: dbsqlPassword,
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
    const DATE_FORMAT = mysql.raw("DATE_FORMAT(date, '%Y-%m-%d') AS Date")
    const DAY_START = date_start ? date_start : '2010-01-01'
    const DAY_FINISH = date_finish ? date_finish : CURRENT_DAY

    const sql = mysql.format(
        'SELECT id AS `Id`, name AS `Name`, organisation AS `Organisation`, email AS `Email`, risk AS `Risk`, caries AS `Caries`, gum_disease AS `Gum disease`, wear AS `Wear`, trauma AS `Trauma`, cancer AS `Cancer`, infection AS `Infection`, other AS `Other concern`, capping AS `Capping`, crown AS `Crown`, filling AS `Filling`, root_canal AS `Root canal`, tooth_extraction AS `Tooth extraction`, ? FROM dentist WHERE organisation IN (?) AND risk IN (?) AND (caries=? OR gum_disease=? OR wear=? OR trauma=? OR cancer=? OR infection=? OR other=? OR capping=? OR crown=? OR filling=? OR root_canal=? OR tooth_extraction=?) AND date >=? AND date <=?',
        [DATE_FORMAT, organisation, risk, caries, gum_disease, wear, trauma, cancer, infection, other, capping, crown, filling, root_canal, tooth_extraction, DAY_START, DAY_FINISH]
    )

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

            if (results) return null
        })

    return null
})
