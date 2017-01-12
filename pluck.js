/*
* @Author: MD NOORUL NABI ANSARI
* @Date:   2017-01-12 18:43:45
* @Last Modified by:   noor
* @Last Modified time: 2017-01-12 18:49:17
*/
var isObject = require('./utility/isObject');
var Err = require('./utility/Err');

function pluck(list,field) {
	var arr = [];
	if(isObject(list)){						//this function will only accept array of objects 
		list.forEach(item => {
			if(item[field] != undefined){
				arr.push(item[field]);
			}else{							//this code will return undefined if the 'field' isnt present in the object
				arr.push(undefined);		//if you only need the matching values then remove this else part
			}
		})
	}else{
		throw new Err("Error: You must provide array of objects")
	}
	return arr;
}