const express = require('express');
const app = express();
const path = require('path');

const testObj = [
  {name: 'David', age: 29 },
  {name: 'Lucy', age: 29}
]

const welcomeToAPI = 'WELCOME TO API'

app.get('/server/leaders',(req,res) => {
  return res.status(200).send(testObj);
})

app.get('/server',(req,res) => {
  return res.status(200).send(welcomeToAPI);
})


if (process.env.NODE_ENV === 'production'){
  //statically serve everything in the build folder on the route '/build'
  app.use('/build', express.static(path.join(__dirname,'../build')));
  //serve index.html on the route '/'
  app.get('/', (req,res) => {
    return res.status(200).sendFile(path.join(__dirname, '../index.html'));
  });
}

app.listen(4000) //listens on port 3000