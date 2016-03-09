var result = 0, i = 2, length = process.argv.length;
for (i; i<length; i++){
	if(process.argv[i]){
		result += Number(process.argv[i]);
	}
}
console.log(result);