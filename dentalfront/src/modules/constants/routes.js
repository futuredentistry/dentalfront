// Unauthorized
export const HOME = '/'

export const SIGNIN = '/signin'
export const SIGNUP = 'signup'
export const PASSWORD_FORGET = '/pw-forget'
export const GET_STARTED = '/get-started'

// Patient
export const PATIENT = '/patient'
export const PERSONAL = `${PATIENT}/personal`
export const LIFESTYLE = `${PATIENT}/lifestyle`
export const DENTAL = `${PATIENT}/dental`
export const MEDICAL = `${PATIENT}/medical`
export const SUMMARY = `${PATIENT}/summary`
export const APPOINTMENT = `${PATIENT}/appointment`

// Screener
export const SCREENER = '/screener'
export const REVIEW = `${SCREENER}/review`
export const IMAGE_CAPTURE = `${SCREENER}/image_capture`
export const SCREENER_COMPLETE = `${SCREENER}/completed`

// Dentist
export const DENTIST = '/dentist'
export const PATIENT_REVIEW = `${DENTIST}/patient_review`
export const DENTIST_CHART = `${DENTIST}/chart` // ToDO issue and image issue
export const DENTAL_REPORT = `${DENTIST}/dental_report`
export const DENTIST_COMPLETE = `${DENTIST}/completed`

// Admin
export const ADMIN = '/admin'
export const ORGANISATION_REPORT = `${ADMIN}/organisation_report`
export const PATIENT_REPORT = `${ADMIN}/patient_report`
export const DENTIST_REPORT = `${ADMIN}/dentist_report`
