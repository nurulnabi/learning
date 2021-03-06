/*
* @Author: MD NOORUL NABI ANSARI
* @Date:   2017-01-17 10:46:54
* @Last Modified by:   noor
* @Last Modified time: 2017-01-17 12:54:49
*/


var find = function(list,iteratee) {
	if(!Array.isArray(list)){
		return void 0;
	}
	if(typeof iteratee === 'function'){
		for(var i=0; i<list.length; i++){
			if(iteratee(list[i])){
				return list[i];
				break;
			}	
		}
	}else{						//in case of iteratee is an object
		for(var i=0; i<list.length; i++){
			if(compareObjILen(iteratee,list[i])){
				return list[i];
			}
		}
	}
	return undefined;
}


var compareObjILen = function (first,second) {
	var status = true;
	for(var key in first){
		if(first[key] !== second[key]){
			status = false;
			break;
		}
	}
	return status;
}

var arr = require('./arr');
console.log(find(arr,{company:'oracle'}));

module.exports = find;	