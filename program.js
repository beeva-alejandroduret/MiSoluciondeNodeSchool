var cb = function (error, data){
	if(error){
		throw error.message;
	}
	else{
		var str = data.toString(), 
			length = str.split('\n').length;
		console.log(length-1);
	}		
}

try{
	if(process && process.argv && process.argv.length >= 2){
		var fs = require('fs');
		fs.readFile(process.argv[2], cb);	
	}
	else{
		throw "Se necesita un fichero que leer";
	}
}
catch(err){
	throw err.message;
}