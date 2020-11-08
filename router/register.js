const express = require('express');
const router = express.Router();
const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '1234',
    database: 'modori'
});

connection.connect();

router.post("/register",function(req,res){
    const { body } = req;
    console.log(body);

    var email = body.email;
    var name = body.name;
    var pw = body.pw;
    var nick = body.nick;


    connection.query(`INSERT INTO member(E_mail,password,name,nick_name) VALUES(?, ?, ?, ?)`, [email, pw, name, nick], function(err,result){
        if(err) {
            console.log(err);
            res.status(403).json({
                message: "회원가입 실패",
            })
        }
        else{
            return res.status(200).json({
                message: "회원가입 성공",
            })
        }
        
    })
})

module.exports = router;