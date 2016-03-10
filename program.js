var http = require('http'),
	arr = new Array(3),
	i=2,
	j=0,
	length = process.argv.length;

var cb = function (response){
	var result = '';
	response.setEncoding('utf8');
	response.on('data', function(data){
		result += data;
	});
	response.on('error',console.error);
	response.on('end', function (){
		arr[j] = result;
		i++;
		j++;
		if(i < length){
			http.get(process.argv[i], cb);
		}else{
			for(j=0;j<3;j++){
				console.log(arr[j]);
			}
		}
	});
}

http.get(process.argv[i], cb);