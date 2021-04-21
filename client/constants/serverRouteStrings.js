/**
 * Holds all of the Server Route Strings as Constants so that they can accessed where imported
 * ATTENTION: ALL SERVER ROUTE STRINGS SHOULD START WITH SRV
 *    opinionated, but it will be very helpful to you
 * define all of the constants then bundle them up into a single module.
 * this will allow you to access them both in modules and non modules
 */

const SRV_Main = '/server'
const SRV_Test = '/server/test';

module.exports = {
  SRV_Main: SRV_Main,
  SRV_Test: SRV_Test,
}