/*
* @Author: nurulnabi
* @Date:   2017-01-16 23:02:51
* @Last Modified by:   nurulnabi
* @Last Modified time: 2017-01-16 23:16:12
*/
 

 var property = function (prop) {
 	return function(obj){
 		obj = obj ? obj : {};
 		return obj[prop];
 	};
 }

module.exports = property;