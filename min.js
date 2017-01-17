/*
* @Author: MD NOORUL NABI ANSARI
* @Date:   2017-01-17 16:51:17
* @Last Modified by:   noor
* @Last Modified time: 2017-01-17 16:57:12
*/



/*
this function takes two arguments 
	1-> list:{ array of integers, array of objects}
	2-> field:{ in case of array of objects field is required to find min of that field but
				if no field is passed the function automatically choose first number field
			}
	3-> in all other cases it will return '+Infinity'
*/




var isNum = require('./utility/isNum');
var Err = require('./utility/Err');
var isObject = require('./utility/isObject');
var getNumField = require('./utility/getNumField');


var min = function(list, field){		//this function accepts a list and a field in case list is array of obj
	list = list ? list : [];
	if(list.length == 0 || !Array.isArray(list)){				//if list is empty return +Infinity as min value
		return +Infinity;
	}
		
	var min = +Infinity;
	if (isNum(list)) {
		list.forEach(num => {
			if(num<min){
				min = num;
			}
		})
	}


	var minObj = {};		//hold the min vlaued object
		minObj[field] = +Infinity;
	if(isObject(list)){
		if(field != null){
			list.forEach(elem =>{		//in case if any object is not having 'field' it will ignore that obj
				if(elem[field] != undefined){
					minObj = elem[field] < minObj[field] ? elem : minObj;
					 
				}
			});
		}else{
			var tempF = getNumField(list[0]);		// in case the user forgot to pass the field 
			minObj[tempF] = +Infinity;									// choose first field which typeof is 'number' return that
			list.forEach(elem =>{		//in case if any object is not having 'field' it will ignore that obj
				if(elem[tempF] != undefined){
					minObj = elem[tempF] < minObj[tempF] ? elem : minObj;
				}
			});
		}

		return minObj;
	}


	return min;
};

module.exports = min;