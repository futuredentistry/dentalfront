import app from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'
import 'firebase/firestore'
import 'firebase/storage'
import 'firebase/functions'

import * as STATUS from 'modules/constants/reportStatus'

const config = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_DATABASE_URL,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
}

class Firebase {
  constructor() {
    app.initializeApp(config)

    if (process.env.NODE_ENV === 'development')
      app.functions().useFunctionsEmulator('http://localhost:5000')

    /* Helper */

    this.serverValue = app.database.ServerValue
    this.emailAuthProvider = app.auth.EmailAuthProvider
    this.googleAuthProvider = new app.auth.GoogleAuthProvider()
    this.facebookAuthProvider = new app.auth.FacebookAuthProvider();
    /* Firebase APIs */

    this.auth = app.auth()
    this.db = app.database()
    this.firestore = app.firestore()
    this.functions = app.functions()
    this.storage = app.storage()
    // this.collection = this.collection()

  }

  arrToInQueryString = arr => `('${arr.join("', '")}')`




  // *** Auth API ***

  // eslint-disable-next-line max-len
  doCreateUserWithEmailAndPassword = (email, password) => this.auth.createUserWithEmailAndPassword(email, password)

  // eslint-disable-next-line max-len
  doSignInWithEmailAndPassword = (email, password) => this.auth.signInWithEmailAndPassword(email, password)

  doSignInWithGoogle = () => this.auth.signInWithPopup(this.googleAuthProvider)

  doSignInWithFacebook = () => this.auth.signInWithPopup(this.facebookAuthProvider)

  doSignOut = () => this.auth.signOut()

  doPasswordReset = email => this.auth.sendPasswordResetEmail(email)

  doSendEmailVerification = () => this.auth.currentUser.sendEmailVerification({
    url: process.env.REACT_APP_CONFIRMATION_EMAIL_REDIRECT,
  })

  // Return null or user object
  getCurrentUser = () => this.auth.currentUser

  doPasswordUpdate = password => this.auth.currentUser.updatePassword(password)

  // *** Merge Auth and DB User API *** //

  onAuthUserListener = (next, fallback = () => { }) => this.auth.onAuthStateChanged((authUser) => {
    if (authUser) {
      this.user(authUser.uid)
        .once('value')
        .then((snapshot) => {
          const dbUser = snapshot.val()

          if (dbUser) {
            next({
              uid: authUser.uid,
              email: authUser.email,
              emailVerified: authUser.emailVerified,
              provider: authUser.providerData[0].providerId,
              ...dbUser,
            })
          }
        })
    } else {
      fallback()
    }
  })

  // *** User API ***

  user = uid => this.db.ref(`users/${uid}`)

  reauthenticate = (currentPassword) => {
    const user = this.auth.currentUser
    const cred = this.emailAuthProvider.credential(user.email, currentPassword)

    return user.reauthenticateAndRetrieveDataWithCredential(cred)
  }

  deleteUser = () => {
    const user = this.auth.currentUser
    return user.delete()
  }

  // *** Change email/password API ***

  changePassword = (newPassword) => {
    const user = this.auth.currentUser
    return user.updatePassword(newPassword)
  }

  changeEmail = (newEmail) => {
    const user = this.auth.currentUser
    return user.updateEmail(newEmail)
  }

  // Report documents
  setPatientReport = report => this.firestore
    .collection('reports')
    .doc(new Date().toISOString())
    .set(report)


  // Organisations documents
  getOrganisationsCollection = () => this.firestore
    .collection('form')
    .doc('organisations')
    .get()

  // Concern documents
  getConcernCollection = () => this.firestore
    .collection('form')
    .doc('concern')
    .get()

  // Treatment documents
  getTreatmentCollection = () => this.firestore
    .collection('treatment')
    .get()


  getPatientReportsForDentist = () => this.firestore
    .collection('reports')
    .where('status', '==', STATUS.REVIEW)
    .limit(1)
    .get()

  getPatientReportsForAffiliate = organisation => this.firestore
    .collection('reports')
    .where('status', '==', STATUS.IN_PROGRESS)
    .where('organisation', '==', organisation)
    .get()

  // Patient report
  updatePatientReport = (reportId, data) => this.firestore
    .collection('reports')
    .doc(reportId)
    .update(data)

  // Pages
  getPage = page => this.firestore
    .collection('content')
    .doc(page)
    .get()

  // Email
  sendMessage = (message, email) => {
    const refMsg = this.db.ref('contact_as')
    const newMessage = refMsg.push()
    return newMessage.set({
      email,
      message,
    })
  }

  // Image
  uploadImage = (image, fileName, onLoad, onCompleat, setMode) => {
    const folder = '/img'
    let uploadTask = this.storage.ref(folder)
      .child(fileName)
      .putString(image, 'data_url', { contentType: 'image/jpg' })

    uploadTask.on('state_changed',
      snapshot => {
        switch (snapshot.state) {
          case 'paused':
          case 'running':
            onLoad()
            break;
          default: break;
        }
      }, error => {
        console.log(error)
      }, () => {
        uploadTask.snapshot.ref.getDownloadURL()
          .then(downloadURL => onCompleat(downloadURL))
          .finally(() => setMode())
      })
  }

  getImgDownloadURL = (fileName) =>
    this.storage.ref('/img').child(fileName).getDownloadURL()

  deleteImage = fileName => this.storage.ref('/img').child(fileName).delete()

  // Admin report filter
  getAdminReport = concern => this.firestore
    .collection('reports')
    .where('status', '==', STATUS.IN_PROGRESS)
    // .where("concern", "array-contains", concern)
    // .orderBy(id)
    .get()


  // SQL
  addReportSQL = () => this.functions.httpsCallable('addReportSQL', {})

  searchReportSQL = () => this.functions.httpsCallable('searchReportSQL', {})

}

export default Firebase
