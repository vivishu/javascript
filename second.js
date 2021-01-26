var express = require('express');
var ejs =require('ejs');
const fs=require('fs');
var app = express();
var port=3000;
app.use(express.static('public'))
app.set('views','./views')
app.set('view engine','ejs');
app.get('/',function(req,res){
    res.render('quatre');
    
    
});
app.listen(3000,()=>{ 
    console.log('http://localhost:3000')
    });
    
