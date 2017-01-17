/*
* @Author: MD NOORUL NABI ANSARI
* @Date:   2017-01-17 12:44:14
* @Last Modified by:   noor
* @Last Modified time: 2017-01-17 12:56:43
*/


var lastIndexOf = function (list,val) {
	list = list ? list : [];
	if(val == null){
		return -1;
	}
	var lastKey = -1;
	for(var key in list){
		elem = list[key];
		if(typeof elem === 'object'){			//in case list is array of objects
			if(compareObject(val,elem)){
				lastKey = key;
			}
		}
		if(elem === val){
			lastKey = key;
		}
	}
	return lastKey;
};

//compares two objects
var compareObject = function (first,second) {
	var status = true;
	if(Object.keys(first).length==Object.keys(second).length){
		for(var key in first){
			if(first[key] !== second[key]){
				status = false;
				break;
			}
		}
	}else {
		return false;
	}
	return status;
}

console.log(lastIndexOf([5,2,3,4,5,6,76],5));
console.log(lastIndexOf([{a:1,b:'noor'},{a:2,b:'noor'},{a:1,b:'noorul'},{}],{a:1}));
console.log(lastIndexOf('nooruln','r'));

module.exports = lastIndexOf;