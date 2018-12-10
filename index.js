const express=require('express');
const bodyParser=require('body-parser');
const app=express();
const session =require('express-session');
const cors = require('cors');
app.use(cors());
const PORT=1234;

const loginRoutes = require('./routes/login');
const signupRoutes = require('./routes/signup');
const userRoutes = require('./routes/users')
const server = require('./database');

app.use(session({
    secret:'hsasbyid63838nasjie098930973ywgdwb',
    saveUninitialized:false,
    resave:false
}))


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}));

app.use(signupRoutes)
app.use(loginRoutes)
app.use('', userRoutes)

app.listen(PORT,()=> {
    console.log('server listening at 1234')
})