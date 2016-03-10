try{
	if(process && process.argv && process.argv.length >= 2){
		var fs = require('fs'),
			buffer = fs.readFileSync(process.argv[2]),
			str = buffer.toString(),
			arr = str.split('\n');
		console.log(arr.length-1);
	}
	else{
		throw "Se necesita un fichero que leer";
	}
}
catch(err){
	throw err.message;
}
