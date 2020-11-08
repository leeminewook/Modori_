var express = require("express");//node server 사용할때 epress필요
var app = express();
var mysql = require("mysql2");
const bodyParser = require('body-parser');
const cors = require('cors');

const login = require('./router/login');
const register = require('./router/register');
const email_check =require('./router/email_check');
const nickname_check = require('./router/nickname_check');

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

app.use(login,register,email_check,nickname_check);

app.listen(8080, () => {
    console.log("server start");
})

module.exports = app;