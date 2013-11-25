var http = require('http');
var url = require('url');

var operation = {
	add2: function(a,b){ return a + b},
	accumulate: function(c){ return c}
}

http.createServer(function (req, res) {
	var pathname = url.parse(req.url).pathname;
	var requrl =  url.parse(req.url,true);
	var first = requrl.query.first;
	var second = requrl.query.second;
	// var input = pathname.split('/');
	// var op = operation[input[1]], 
	// num1 = parseInt(input[2]), num2 = parseInt(input[3]);
	var result = (+first)+(+second);

    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end(result.toString(),'utf-8');

}).listen(8282,"localhost");
  console.log("\nRunning on localhost 8282!!!");