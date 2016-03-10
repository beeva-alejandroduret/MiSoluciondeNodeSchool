var cb = function (err, data){
	if(err){
		throw err;
	}
	else{
		var path = require('path'),
			filter =  '.'+process.argv[3],
			i=0,
			length = data.length;
		for (i;i<length;i++){
			if(path.extname(data[i]) === filter){
				console.log(data[i]);
			}
		}
		
	}
} 

try{
	if(process && process.argv && process.argv.length >= 2){
		var fs = require('fs'),
		 	dir = process.argv[2];
		fs.readdir(dir,cb);
	}
	else{
		throw 'Se necesita una ruta sobre la que filtrar';
	}
}catch(err){
	throw err;
}