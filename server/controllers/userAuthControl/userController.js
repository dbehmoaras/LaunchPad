const db = require('./../../sqlConnection.js');

//bundle all userController middleware into a single userController object that can be exported as a module
const userController = {};

userController.signUp = (req, res, next) =>{

  console.log('userController.signUp:',req.body)

  const values = [
    req.body.email,
    req.body.password,
    req.body.lastName,
    req.body.firstName
  ]

  const qString =
    `INSERT INTO Users (Email, Password, LastName, FirstName)
    VALUES ($1, $2, $3, $4)`;

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


//export the userController module
module.exports = userController;