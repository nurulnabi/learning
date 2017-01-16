/*
* @Author: nurulnabi
* @Date:   2017-01-16 22:46:08
* @Last Modified by:   nurulnabi
* @Last Modified time: 2017-01-16 22:48:24
*/


var keyS = function(obj) {
	obj = obj ? obj : {};
	return Object.getOwnPropertyNames(obj);
}

console.log(keyS({a:1,name:'noor',age:3}));

module.exports = keyS;
