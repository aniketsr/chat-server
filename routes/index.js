var content = require('./contents.js').content;
var fs = require('fs');

exports.login = function(req, res){
	res.render('login',{title:'Login Page'});
};

exports.chat = function(req, res){
  	var username = (req.body.userid);
  	var password = (req.body.password);
  	console.log(JSON.parse(fs.readFileSync("details.json","utf-8")));

    if(password != content.details[username]){
      	res.render('/',{error: "Incorrect password or login name"});
    }
    else
    	res.render('/chat');
};