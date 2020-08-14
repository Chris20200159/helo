require('dotenv').config();
const express = require('express');
const session = require('express-session');
const massive = require('massive');
const app = express();
const ctrl = require('./controller');
const {SERVER_PORT, CONNECTION_STRING, SESSION_SECRET} = process.env;

app.use(express.json())

app.use(session({
  resave: false,
  saveUninitialized: true,
  cookie: { maxAge: 1000 * 60 * 60 * 24},
  secret: SESSION_SECRET  
}))

massive({
  connectionString: CONNECTION_STRING,
  ssl: {
    rejectUnauthorized: false
  }
}).then( db => {
  app.set('db', db)
  console.log('connected to db')
}).catch( err => console.log(err))


// endpoints
app.post('/auth/login', ctrl.login)
app.post('/auth/register', ctrl.register)

app.listen(SERVER_PORT, ()=> console.log(`Connected to port ${SERVER_PORT}`))