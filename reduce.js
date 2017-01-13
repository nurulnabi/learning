/*
* @Author: MD NOORUL NABI ANSARI
* @Date:   2017-01-12 15:04:25
* @Last Modified by:   noor
* @Last Modified time: 2017-01-13 19:22:14
*/

var isNum = require('./utility/isNum');
var isObject = require('./utility/isObject');

var reduce = function(list,iteratee,initVal){
	if(typeof iteratee !== 'function'){
		throw new TypeError("iteratee is not a function");
	}

	var result

	if(Object.keys(list).length == 0 || list == null || list == undefined){
		return typeof initVal === 'number' ? initVal != NaN ? initVal : null:null;
	}
}


console.log(reduce([],"",1));