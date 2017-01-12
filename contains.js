/*
* @Author: MD NOORUL NABI ANSARI
* @Date:   2017-01-12 18:20:47
* @Last Modified by:   noor
* @Last Modified time: 2017-01-12 18:43:29
*/
var isObject = require('./utility/isObject');


var contains = function(list,val,fromIndex = -1){
	if(val === null || val === undefined || val ===""){
		return false;
	}
	if(!isObject(list)){			//this will handle when the list is either integer array or strings
		var	idx = list.indexOf(val);
 		return idx>fromIndex ? true: false;		
	}
	if(isObject(list)){				// this will handle when list is array of objects
		return false;
	}
}