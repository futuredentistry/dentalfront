
const logonUser = () => JSON.parse(localStorage.getItem(process.env.REACT_APP_LOCAL_STORAGE))

export const UserAuthorized = () => logonUser() || false
export const UserEmailVerified = () => (logonUser() ? logonUser().emailVerified : false)
export const UserRole = () => logonUser() && logonUser().role
export const UserEmail = () => logonUser() && logonUser().email
export const UserUid = () => logonUser() && logonUser().uid
export const UserFirstName = () => (logonUser() && logonUser().firstName ? logonUser().firstName : 'user')
export const UserFamilyName = () => (logonUser() && logonUser().familyName ? logonUser().familyName : '')