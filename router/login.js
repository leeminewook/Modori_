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

router.post('/login', (req,res) => {
    const { body } = req;

    const email = body.email;
    const pw = body.pw;

    connection.query("select * from member where E_mail=? and password=? ",[email,pw],function(err,result){
        console.log(result);
        if(result.length != 0){
            return res.status(200).json({
                message: "로그인 성공",
            });
        } else {
            return res.status(401).json({
                message: "로그인 실패",
            })
        }
    })
})

module.exports = router;