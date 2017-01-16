/*
* @Author: MD NOORUL NABI ANSARI
* @Date:   2017-01-16 19:16:05
* @Last Modified by:   noor
* @Last Modified time: 2017-01-16 19:31:23
*/

var allKeys = function(obj) {
	obj = obj ? obj : {};
	var tmpObj = obj;
	var keys = Object.getOwnPropertyNames(obj);
	while(tmpObj != null){
			Object.getOwnPropertyNames(tmpObj).forEach(function(prop){
				keys.push(prop);
			});
			tmpObj = Object.getPrototypeOf(tmpObj)
	}
	return keys;
}

function prop(){
	this.name = 'noor';
	this.age = 23;
}

prop.prototype.id = 'prop';
prop.prototype.fn = function(){	return this.name; };

var obj = new prop();

obj.designation = 'SDE';
obj.company = 'creatiosoft';
console.log(Object.getOwnPropertyNames(Object.getPrototypeOf(obj)));
console.log(allKeys(obj));

module.exports = allKeys;