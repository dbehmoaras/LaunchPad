/**
 * Holds all of the Client Route Strings as Constants so that they can accessed where imported
 * define all of the constants then bundle them up into a single module.
 * this will allow you to access them both in modules and non modules
 */

const HOME_Route = '/';
const API_User_Route = '/API_User';
const USER_SignUp_Route = '/API_User/signUp';
const USER_LogIn_Route = '/API_User/logIn';
const USER_Secret_Route = '/API_User/secret'

module.exports = {
  HOME_Route: HOME_Route,
  API_User_Route: API_User_Route,
  USER_SignUp_Route: USER_SignUp_Route,
  USER_LogIn_Route: USER_LogIn_Route,
}