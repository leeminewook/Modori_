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


router.post("/register/email",function(req,res){
    const { body } = req;

    const email = body.email;


    connection.query("SELECT E_mail from member where E_mail=?",[email],function(err,result){
        if(err) console.log(err);
        console.log(result);

        if(email.includes('@')){
            console.log("성공");
        }
        else{
            return res.status(403).json({
                message:"이메일 형식이 아닙니다",
            })
        }

        if(result.length === 0){
            return res.status(200).json({
                message: "사용할 수 있는 이메일 입니다.",
            });
        }else{
            return res.status(401).json({
                message: "이미 있는 이메일 입니다.",
            })
        }
    })
})

module.exports = router;