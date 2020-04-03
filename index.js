///import express module
var express = require('express');
var parser = require('body-parser');
var session = require('express-session');
var cookieParser = require('cookie-parser');
var ejs = require('ejs');
var path = require('path');
var db = require('./database');


//create an express app
var app = express();
app.use(cookieParser());
app.use(session({secret: "Your secret key"}));
app.use(parser.json());
app.use(parser.urlencoded());
app.use(express.static('public'));



app.get('/', function(req, res) {  
    let data = {
        title: "Koala"
    }
    ejs.renderFile('./html/index.ejs', data, null, function(err, str){
        // str => Rendered HTML string
        res.send(str);
    });
});


app.get('/about', function(req, res) {
    db.getEmployeesNumber(databaseData,function(err,result){
        if(err){
        }
        else{
            var list = [];
            for (var key in result) {
                if (result.hasOwnProperty(key)) {           
                    list.push({name: result[key].name, jobTitle:result[key].jobTitle, pathToImg:result[key].img});
                }
            }
            let data = {
                title: "About Koala ",
                employees: list,
            }
            ejs.renderFile('./html/about.ejs', data, null, function(err, str){
                // str => Rendered HTML string
                res.send(str);
            });
        }
    });
});
app.get('/contact', function(req, res) {
//    res.sendFile(path.join(__dirname+'/html/contact.html'));
    let data = {
        title: "Contact us"
    }
    ejs.renderFile('./html/contact.ejs', data, null, function(err, str){
        // str => Rendered HTML string
        res.send(str);
    });
});

//run the server on port 3000
var port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log("server running on port:" + port);
});
