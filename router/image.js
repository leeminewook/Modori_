const multer = require('multer')
const express = require('express');
const router = express.Router();
const mysql = require('mysql2');
const path = require('path');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '1234',
    database: 'modori'
});

connection.connect();

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.join(__dirname, '../public'));
    },
    filename: function (req, file, cb) {
      cb(null, file.originalname)
    }
  })


let upload = multer({storage: storage});

router.post('/upload',upload.single('file'),(req,res)=>{
    res.json({file: req.file})
    console.log(req.file)
    return res.status(200).json({
        message:"실행됨",
    })
})

module.exports = router;