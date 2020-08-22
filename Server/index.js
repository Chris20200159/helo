require('dotenv').config();
const express = require('express');
const session = require('express-session');
const massive = require('massive');
const ctrl = require('./controller');
const {SERVER_PORT, CONNECTION_STRING, SESSION_SECRET} = process.env;

const app = express();

//# top level middleware
app.use(express.json())

//# this lsets us use session in our req object
app.use(
  session({
    resave: false,
    saveUninitialized: true,
    secret: SESSION_SECRET,  
    cookie: { maxAge: 1000 * 60 * 60 * 24 },
 })
);

//#database connection setup
massive({
  connectionString: CONNECTION_STRING,
  ssl: {
    rejectUnauthorized: false
  },
}).then( db => {
  app.set('db', db)
  console.log('Database Online');
}).catch( err => console.log(`Database error: ${err}`));


//# Auth endpoints
app.post('/auth/login', ctrl.login)
app.post('/auth/register', ctrl.register)

app.listen(SERVER_PORT, ()=> console.log(`Connected to port ${SERVER_PORT}`))