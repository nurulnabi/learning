/*
* @Author: MD NOORUL NABI ANSARI
* @Date:   2017-01-17 11:01:43
* @Last Modified by:   noor
* @Last Modified time: 2017-01-17 12:30:52
*/

var findWhere = function(list,iteratee) {
	if(!Array.isArray(list)){
		return void 0;
	}
	if(typeof iteratee === 'function'){
		for(var i=0; i<list.length; i++){
			if(iteratee(list[i])){
				return i;
				break;
			}	
		}
	}else{						//in case of iteratee is an object
		for(var i=0; i<list.length; i++){
			if(compareObjILen(iteratee,list[i])){
				return i;
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

console.log(findWhere([{a:1,b:'noor'},{a:2,b:'nabi'}],{b:'nabi'}));
module.exports = findWhere;	