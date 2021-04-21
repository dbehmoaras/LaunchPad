const bcrypt = require('bcryptjs');

const userAuth = {
  SALT: bcrypt.genSaltSync(10),
  HASH: (password,salt) => bcrypt.hashSync(password,salt),
  CHECK: (password, hash) => bcrypt.compareSync(password, hash),
}

export default userAuth;

/** BCRYPT TEST & SAMPLE CODE
 *
 BCRYPT TEST & SAMPLE CODE
 let pw = 'password';
 let H = userAuth.HASH(pw,userAuth.SALT);
 let check = userAuth.CHECK(pw,H);

 console.time('bcrypt')
 console.timeLog('bcrypt')
 console.log(userAuth.SALT);
 console.timeLog('bcrypt')
 console.log(H);
 console.timeEnd('bcrypt')

 const output = userAuth.CHECK('password',H);
 console.log(output)
 */