/*
* @Author: nurulnabi
* @Date:   2017-01-16 23:24:55
* @Last Modified by:   nurulnabi
* @Last Modified time: 2017-01-16 23:30:34
*/

var invert = function (obj) {
	obj = obj ? obj : {};
	var result = {};
	if(typeof obj !== 'object'){
		return result;
	}
	for(var key in obj){
		result[obj[key]] = key;
	}
	return result;
}

module.exports = invert;