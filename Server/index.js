require('dotenv').config();
const express = require('express');
const session = require('express-session');
const massive = require('massive');
const authCtrl = require('./AuthController');
const postCtrl = require('./PostController');
const cmtCtrl = require('./CmntController');
const {SERVER_PORT, CONNECTION_STRING, SESSION_SECRET} = process.env;

const app = express();

//# top level middleware
app.use(express.json())

//# this lets us use session in our req object
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
app.post('/auth/login', authCtrl.login);
app.post('/auth/register', authCtrl.register);
app.post('/auth/logout', authCtrl.logout);
app.get('/auth/user', authCtrl.getUser);

//# Post endpoints
app.get('/api/posts', postCtrl.getPosts);
// app.get('/api/posts/:id')
app.post('/api/posts', postCtrl.addPost);
app.put('/api/posts',postCtrl.editPost);
app.delete('/api/posts', postCtrl.deletePost);

//# Comment Endpoints
app.post('/api/comments', cmtCtrl.addComment);
app.post('/api/comment/:id', cmtCtrl.editComment);
app.delete('/api/comments', cmtCtrl.deleteComment);

app.listen(SERVER_PORT, ()=> console.log(`Connected to port ${SERVER_PORT}`))