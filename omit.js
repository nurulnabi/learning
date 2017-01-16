/*
* @Author: MD NOORUL NABI ANSARI
* @Date:   2017-01-16 18:39:19
* @Last Modified by:   noor
* @Last Modified time: 2017-01-16 18:56:37
*/

var omit = function(obj,iteratee){
	obj = obj ? obj : {};
	iteratee = iteratee ? iteratee : undefined;

	if(typeof iteratee === 'function'){
		for(var key in obj){
				if(iteratee(obj[key],key,obj)){
					delete obj[key];
			}
		}
	}else if(Array.isArray(iteratee)){
		iteratee.forEach(function(key){
			delete obj[key];
		});
	}else{
		delete obj[iteratee];
	}
	return obj;
}

module.exports = omit;