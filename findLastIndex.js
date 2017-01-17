/*
* @Author: MD NOORUL NABI ANSARI
* @Date:   2017-01-17 12:47:53
* @Last Modified by:   noor
* @Last Modified time: 2017-01-17 13:01:46
*/

var findLastIndexOf = function (list,val) {
	list = list ? list : [];
	if(val == null){
		return -1;
	}
	var lastKey = -1;
	for(var key in list){
		elem = list[key];
		if(typeof elem === 'object'){			//in case list is array of objects
			if(compareObjILen(val,elem)){
				lastKey = key;
			}
		}
		if(elem === val){
			lastKey = key;
		}
	}
	return list[lastKey];
};

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
console.log(findLastIndexOf(arr,{age:37,company:'google'}));

module.exports = findLastIndexOf;