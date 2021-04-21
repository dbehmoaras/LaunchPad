const express = require('express');
const app = express();
const path = require('path');

const testObj = [
  {name: 'David', age: 29 },
  {name: 'Lucy', age: 29}
]

const welcomeToServer = 'WELCOME TO SERVER'
app.get('/server',(req,res) => {
  return res.status(200).send(welcomeToServer);
})


app.get('/server/test',(req,res) => {
  return res.status(200).send(testObj);
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