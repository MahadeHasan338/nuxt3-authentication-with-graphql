export interface Token {
  token?: string;
}
export interface LogIn {
  tokenAuth: Token;
}
export interface Deleted {
  deleted?: boolean
}
export interface LogOut {
  deleteTokenCookie?: Deleted;
}
export interface User {
  id?: string | number
}
export interface SignUp {
  createOrUpdateUser?: User;
}


