var net = require('net'),
	addZero = function (i){
		return (i < 10 ? '0' : '') + i;
	},
	server = net.createServer(function(socket){	
		var date = new Date(),
			day = addZero(date.getDate()),
			month = addZero(date.getMonth()+1),
			year = addZero(date.getFullYear()),
			hour = addZero(date.getHours()),
			min = addZero(date.getMinutes());		
		socket.write(year+'-'+month+'-'+day+' '+hour+':'+min+'\n');
		socket.end();
	}).listen(process.argv[2]);

