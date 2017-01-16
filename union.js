/*
* @Author: MD NOORUL NABI ANSARI
* @Date:   2017-01-16 14:34:41
* @Last Modified by:   noor
* @Last Modified time: 2017-01-16 15:36:27
*/
var isNum = require('./utility/isNum');

var union = function () {
	var totalArr = arguments.length;
	var arr=[];
	for(var i=0; i<totalArr; i++){
		if(Array.isArray(arguments[i])){
			makeSingleArr(arguments[i],arr);
		}
	}
	return arr;
}

var makeSingleArr = function(arg,arr){
	arg.forEach(function(val) {
		if(arr.indexOf(val)==-1){
			arr.push(val);
		}
	});
}

module.exports = union;