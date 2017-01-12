/*
* @Author: MD NOORUL NABI ANSARI
* @Date:   2017-01-12 18:44:21
* @Last Modified by:   noor
* @Last Modified time: 2017-01-12 18:44:27
*/
var Err = require('./utility/Err');
var isObject = require('./utility/isObject');


var where = function(list,obj){
	var arr = [];				// will hold the extracted objects

	if(!isObject(list)){		// if the list is not the array of objects
		return list;
	}
	if(arguments.length != 2){	//if the number of arguments passed is less than 2 throw an error
		throw new Err("Error: Kindly pass a list and an object");
	}

	if(!Array.isArray(list)){		// first argument must an array type 
		throw new Err("TypeError: list is not an array");
	}
	if(Object.keys(obj).length == 0){
		throw new Err("Error: Oject with no properties");
	}

	if(typeof obj === 'object' && obj != null && Array.isArray(obj) == false){			//iteratively check wether any object in list has the values from obj
		var keys = Object.keys(obj);

		list.forEach(item => {
			var status = true;
			for(var k in keys){
				if(item[keys[k]] != obj[keys[k]]){
					status = false;
					break;
				}
			}
			if(status){
				arr.push(item);
			}
		})
		
	}else{					//else return the original list in case if the second argument is not an object
		return list;
	}
	return arr;
}