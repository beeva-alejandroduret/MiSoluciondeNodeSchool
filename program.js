var http = require('http');

var cb = function (response){
	response.setEncoding('utf8');
	response.on('data', console.log);
	response.on('error', console.error);
}

http.get(process.argv[2], cb);

