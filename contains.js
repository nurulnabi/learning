/*
* @Author: MD NOORUL NABI ANSARI
* @Date:   2017-01-12 18:20:47
* @Last Modified by:   noor
* @Last Modified time: 2017-01-18 10:18:18
*/
var isObject = require('./utility/isObject');


var contains = function(list,val,fromIndex = -1){
	if(val === null || val === undefined || val ===""){
		return false;
	}
	if(!isObject(list)){			//this will handle when the list is either integer array or strings
		var	idx = list.indexOf(val);
		console.log(idx);
 		return idx>fromIndex ? true: false;		
	}
	if(isObject(list)){				// this will handle when list is array of objects
		for(var i=0; i<list.length; i++){
			if(compareObject(val,list[i])){
				return true;
			}
		}
	}
	return false;
}

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

var num = require('./num');

console.log(contains(num,0));