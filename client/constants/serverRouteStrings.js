/**
 * Holds all of the Server Route Strings as Constants so that they can accessed where imported
 * ATTENTION: ALL SERVER ROUTE STRINGS SHOULD START WITH SRV
 *    opinionated, but it will be very helpful to you
 * define all of the constants then bundle them up into a single module.
 * this will allow you to access them both in modules and non modules
 */

const SRV_Main = '/server';
const SRV_Test = '/server/test';

const SRV_UserAuth = '/server/userAuth';
const SRV_UserAuth_SignUp = '/server/userAuth/signUp';
const SRV_UserAuth_LogIn = '/server/userAuth/logIn';


module.exports = {
  SRV_Main: SRV_Main,
  SRV_Test: SRV_Test,
  SRV_UserAuth: SRV_UserAuth,
  SRV_UserAuth_SignUp: SRV_UserAuth_SignUp,
  SRV_UserAuth_LogIn: SRV_UserAuth_LogIn,
}