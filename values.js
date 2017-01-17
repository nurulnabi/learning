/*
* @Author: MD NOORUL NABI ANSARI
* @Date:   2017-01-17 16:43:27
* @Last Modified by:   noor
* @Last Modified time: 2017-01-17 16:49:45
*/

var values = function(obj) {
	obj = obj ? obj : {};
	var result = [];
	for(var key in obj){
		result.push(obj[key])
	}
	return result;
};

module.exports = values;