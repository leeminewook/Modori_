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

router.post("/register/nickname",function(req,res){
    const { body } = req;

    const nick = body.nick;


    connection.query("SELECT nick_name from member where nick_name=?",[nick],function(err,result){
        if(err) console.log(err);
        console.log(result);
        if(result.length === 0){
            return res.status(200).json({
                message: "사용할 수 있는 닉네임 입니다.",
        });
        }else{
            return res.status(401).json({
                message: "이 닉네임은 사용할 수 없습니다.",
            })
        }
    })
})


module.exports = router;