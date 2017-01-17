/*
* @Author: MD NOORUL NABI ANSARI
* @Date:   2017-01-17 16:33:45
* @Last Modified by:   noor
* @Last Modified time: 2017-01-17 16:35:54
*/

var clone = function(obj) {
	obj = obj ? obj : {};
	var keys = Object.keys(obj);
	var newObj = {};
	keys.forEach(function(k){
		newObj[k] = obj[k];
	})
	return newObj;
}


module.exports = clone;