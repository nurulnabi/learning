/*
* @Author: MD NOORUL NABI ANSARI
* @Date:   2017-01-12 15:04:25
* @Last Modified by:   nurulnabi
* @Last Modified time: 2017-01-16 21:42:20
*/

/*
*	this program reduces the array into single value
*
*/

var isNum = require('./utility/isNum');
var isObject = require('./utility/isObject');
var Err = require('./Err');

var reduce = function(list,iteratee,initVal){
	var result="";
	
	isFunction(iteratee);	
	if(Object.keys(list).length == 0 || list == null || list == undefined){
		return typeof initVal === 'number' ? initVal != NaN ? initVal : null:null;
	}else {
		result = getMemo(initVal,list);
		list.forEach( function(element,index) {
			result = iteratee(result,element,index,list);
		});
	}

	return result;
}

var isFunction = function(iteratee){
	if(typeof iteratee !== 'function'){
		throw new TypeError("iteratee is not a function");
	}
}

var getMemo = function(initVal,list){
	var result = initVal ? 
			initVal : isNum(list) ?	
				0 : initVal == 0 ?
					initVal:undefined;
		if(result == undefined)
			throw new Error("You must provide initial value in case of list of Objects");
	return result;
}
var arr = require('./arr');
console.log(reduce(arr));
module.exports = reduce;