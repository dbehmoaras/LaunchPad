const db = require('./../../sqlConnection.js');

//bundle all userController middleware into a single userController object that can be exported as a module
const userController = {};

userController.signUp = (req, res, next) => {

  console.log('userController.signUp:',req.body)

  const values = [
    req.body.email,
    req.body.password,
    req.body.lastName,
    req.body.firstName
  ]

  const qString =
    `INSERT INTO users_crypt (email, hash, lastname, firstname)
    VALUES ($1, crypt($2 ,gen_salt('bf')), $3, $4)`;

  db.query(qString, values)
    .then(data => {
      console.log('userController.signUp USER ADDED:',data);
      res.locals.newUser = data.rows[0];
    })
    .then(next)
    .catch(err => next({
      log: err,
      err: 'ERROR: userController.signUp FAILED TO CREATE USER'
    }))
}

userController.logIn = (req, res, next) => {

  console.log('userController.logIn', req.body);

  const values = [req.body.email]
  const qString = `SELECT (email, hash) FROM users_crypt WHERE email = $1`;

  db.query(qString, values)
    .then(data => {
      console.log('NEXT STEP: invoke next, move to cookie middleWare. data:',data.rows[0]);
      res.json(data.rows[0]);
    })
    .then(next)
    .catch(err => next({
      log: err,
      err: 'ERROR: userController.logIn failed to query a user in the database'
    }))
}



//export the userController module
module.exports = userController;