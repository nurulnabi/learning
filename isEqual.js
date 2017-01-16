/*
* @Author: MD NOORUL NABI ANSARI
* @Date:   2017-01-16 10:38:20
* @Last Modified by:   noor
* @Last Modified time: 2017-01-16 13:31:06
*/

var isNum = require('./utility/isNum');
var isObject = require('./utility/isObject');


var isEqual = function (first, second) {
	switch (customTypeof(first,second)) {
		case false:
			return false;
			break;
		case 'object':
			return caseObject(first,second);
			break;
		default:
			return first === second;
			break;
	}
}

var caseObject = function (first,second) {
	if(Array.isArray(first)==true && Array.isArray(second)==true){		//for array of primitives
		var status = true;
		if(isNum(first)==true && isNum(second)==true){
			for(var key in first){
				if(first[key] != second[key]){
					status = false;
					break;
				}
			}
		}else if(isObject(first)==true && isObject(second)==true) {
			for(var key in first){
				status = compareObject(first[key],second[key]);
				if(!status){
					break;
				}
			}
		}else {
			return false;
		}
		return status;
	}else{						//for objects
		return compareObject(frist,second);
	}
}

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
var customTypeof = function (first,second) {	//this will check typeof arguments if found same then return their type
	if(typeof first === typeof second){
		if(typeof first === undefined || typeof second === undefined){
			return false;
		}
		if(Array.isArray(first)==true && Array.isArray(second)==true){
			if(Object.keys(first).length!=Object.keys(second).length){
				return false;
			}
		}
		return typeof first;
	}
	return false;
}

module.exports = isEqual;
