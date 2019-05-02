import app from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'
import 'firebase/firestore'

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

    /* Helper */

    this.serverValue = app.database.ServerValue
    this.emailAuthProvider = app.auth.EmailAuthProvider

    /* Firebase APIs */

    this.auth = app.auth()
    this.db = app.database()
    this.firestore = app.firestore()
    // this.collection = this.collection()
  }

  // *** Auth API ***

  // eslint-disable-next-line max-len
  doCreateUserWithEmailAndPassword = (email, password) => this.auth.createUserWithEmailAndPassword(email, password)

  // eslint-disable-next-line max-len
  doSignInWithEmailAndPassword = (email, password) => this.auth.signInWithEmailAndPassword(email, password)

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


  getPatientReportsForDentist = () => this.firestore
    .collection('reports')
    .where('status', '==', 'IN_PROGRESS')
    .limit(1)
    .get()

  getPatientReportsForAffiliate = organisation => this.firestore
    .collection('reports')
    .where('status', '==', 'IN_PROGRESS')
    .where('organisation', '==', organisation)
    .get()

  // ToDo
  updatePatientReport = patient => console.log(patient)

  // Pages
  getPage = page => this.firestore
    .collection('content')
    .doc(page)
    .get()
}

export default Firebase
