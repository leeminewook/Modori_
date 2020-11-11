var express = require("express");//node server 사용할때 epress필요
var app = express();
var mysql = require("mysql2");
const bodyParser = require('body-parser');
const cors = require('cors');

const login = require('./router/login');
const register = require('./router/register');
const email_check =require('./router/email_check');
const nickname_check = require('./router/nickname_check');
const profile = require('./router/profile');
const create = require('./router/create');
const P_delete = require('./router/P_delete');
const authmiddleware = require('./middleware/authmiddleware');
const image = require('./router/image');
const getPost = require('./router/getPost');
const update = require('./router/update');
const getPosts = require('./router/getPosts');

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(authmiddleware);
app.use(login,register,email_check,nickname_check,profile,create,P_delete,image,getPost,update,getPosts);

app.listen(8080, () => {
    console.log("server start");
})

module.exports = app;