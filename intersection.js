/*
* @Author: nurulnabi
* @Date:   2017-01-16 23:53:30
* @Last Modified by:   nurulnabi
* @Last Modified time: 2017-01-17 00:16:58
*/

var intersection = function () {
	var result = [];
	if(arguments.length == 0 ){
		return result;
	}
	if(arguments.length==1){
		return arguments[0] ? singleArg(arguments[0]) : [];
	}
	result = firstTwo(arguments[0],arguments[1]);
	for(var i=2; i<arguments.length; i++){
		arr = arguments[i];
		for(var key in arr){
			if(result.indexOf(arr[key])>=0){
				result.push(arr[key]);
			}
		}
	}
	return result;
}

var singleArg = function(arr){
	var result = [];
	for(var key in arr){
			result.push(arr[key]);
	}
	return result;
}

var firstTwo = function (arr1,arr2) {
	var result = [];
	for(var key in arr1){
		if(arr2.indexOf(arr1[key])>=0){
			result.push(arr1[key]);
		}
	}
	return result;
}

module.exports = intersection;