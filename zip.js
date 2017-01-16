/*
* @Author: MD NOORUL NABI ANSARI
* @Date:   2017-01-16 16:27:51
* @Last Modified by:   noor
* @Last Modified time: 2017-01-16 17:58:06
*/

var zip = function() {
	var arr = argumentsToArray(arguments);
	var maxLen = getMaxLength(arr);
	var len = arr.length;
	var index = 0;
	var result = [];
	var subResult = [];
	for(var i=0; i<maxLen; i++){
		subResult = [];
		arr.forEach(function(subArr){
			subResult.push(subArr[i]);
		})
		result.push(subResult);
	}
	return result;
}

var getMaxLength = function(args){
	var max = -Infinity;
	args.forEach(function(arr){
		if(arr.length>max){
			max = arr.length;
		}
	})
	return max;
}
var argumentsToArray = function(args){
	var arr = [];
	for(var key in args){
		arr.push(args[key]);
	}
	return arr;
}

module.exports = zip;