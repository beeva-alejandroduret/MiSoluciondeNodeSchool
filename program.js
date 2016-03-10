var mymodule = require('./mymodule');
var callback = function (err, data){
	if(err){
		throw err;
	}else{
		var length = data.length,
			i=0;
		for(i;i<length;i++){
			if(data[i]){
				console.log(data[i]);
			}
		}
	}
}
mymodule(process.argv[2], process.argv[3], callback);