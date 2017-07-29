var fs= require('fs');

exports.rf = function*(path){
	// fs.readFile(path, function(err, data){
	// 	var text  = yield data;
	// 	console.log(data)
	// });
	// var text  = yield path;
	var text = yield fs.readFile(path);
	console.log("text**********"+text);
}
