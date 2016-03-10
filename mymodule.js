module.exports = function(dir, filter, callback){
	var fs = require('fs');
	var cb = function (err,data){
		if(err){
			callback(err);
		}
		else{
			var path = require('path'),
			i=0,
			length = data.length,
			result = new Array(length);
			for (i;i<length;i++){
				if(path.extname(data[i]) === '.'+filter){
					result[i] = data[i];
				}
			}
			callback(null,result);
		}
	}
	fs.readdir(dir, cb);
}

