/*
* @Author: MD NOORUL NABI ANSARI
* @Date:   2017-01-16 18:02:57
* @Last Modified by:   noor
* @Last Modified time: 2017-01-16 18:21:47
*/

var object = function(keys,values) {
	var obj = {};
	var len = Array.isArray(keys) ? keys.length : keys === undefined ? {} : keys.length;
	values = values ? values : {};
	for(var i=0; i<len; i++){
		obj[keys[i]] = values[i];
	}
	return obj;
}
console.log(object([1,2,32]));
module.exports = object;