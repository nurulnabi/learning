/*
* @Author: MD NOORUL NABI ANSARI
* @Date:   2017-01-12 18:51:39
* @Last Modified by:   noor
* @Last Modified time: 2017-01-18 10:25:04
*/


/*
this function takes two arguments 
	1-> list:{ array of integers, array of objects}
	2-> field:{ in case of array of objects field is required to find max of that field but
				if no field is passed the function automatically choose first number field
			}
	3-> in all other cases it will return '-Infinity'
*/




var isNum = require('./utility/isNum');
var Err = require('./utility/Err');
var isObject = require('./utility/isObject');
var getNumField = require('./utility/getNumField');

var max = function(list, field){		//this function accepts a list and a field in case list is array of obj
	list = list ? list : [];
	if(list.length == 0 || !Array.isArray(list)){				//if list is empty return -Infinity as max value
		return -Infinity;
	}
		
	var max = -Infinity;
	if (isNum(list)) {
		list.forEach(num => {
			if(num>max){
				max = num;
			}
		})
	}


	var maxObj = {};		//hold the max vlaued object
		maxObj[field] = -Infinity;
	if(isObject(list)){
		if(field != null){
			list.forEach(elem =>{		//in case if any object is not having 'field' it will ignore that obj
				if(elem[field] != undefined){
					maxObj = elem[field] > maxObj[field] ? elem : maxObj;
					 
				}
			});
		}else{
			var tempF = getNumField(list[0]);		// in case the user forgot to pass the field 
			maxObj[tempF] = -Infinity;									// choose first field which typeof is 'number' return that
			list.forEach(elem =>{		//in case if any object is not having 'field' it will ignore that obj
				if(elem[tempF] != undefined){
					maxObj = elem[tempF] > maxObj[tempF] ? elem : maxObj;
				}
			});
		}

		return maxObj;
	}


	return max;
};

var arr = require('./arr');
var num =require('./num');

console.log(max(num));
console.log(max(arr,'age'));

module.exports = max;