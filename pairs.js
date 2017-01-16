/*
* @Author: nurulnabi
* @Date:   2017-01-16 23:32:23
* @Last Modified by:   nurulnabi
* @Last Modified time: 2017-01-16 23:36:19
*/

var pairs = function(obj){
	obj = obj ? obj : {};
	var result = [];
	var subResult = [];
	if(typeof obj === 'object'){
		for(var key in obj){
			subResult = [];
			subResult.push(key,obj[key]);
			result.push(subResult);
		}

	}
	return result;
}


module.exports = pairs;