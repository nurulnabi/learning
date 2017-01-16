/*
* @Author: MD NOORUL NABI ANSARI
* @Date:   2017-01-16 19:16:05
* @Last Modified by:   nurulnabi
* @Last Modified time: 2017-01-16 22:41:07
*/

var allKeys = function(obj) {
	obj = obj ? obj : {};
	var tmpObj = obj;
	var keys = [];
	for(;tmpObj != Object.prototype; tmpObj=Object.getPrototypeOf(tmpObj)){
		var arr = Object.getOwnPropertyNames(tmpObj);
		arr.forEach(function(prop){
			keys.push(prop);
		});
	}

	return keys;
}

var parent = {
	'name':'parent',
	'age':23
}

var obj = Object.create(parent);

obj.designation = 'SDE';
obj.company = 'creatiosoft';
console.log(allKeys(obj));

module.exports = allKeys;