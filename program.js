var http = require('http'),
	server = http.createServer(function(req, res){
		var fs = require('fs'),
			fileStream = fs.createReadStream(process.argv[3]);
        	fileStream.pipe(res);
	}).listen(process.argv[2]);