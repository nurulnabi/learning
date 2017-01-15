/*
* @Author: noor
* @Date:   2017-01-15 10:30:15
* @Last Modified by:   noor
* @Last Modified time: 2017-01-16 01:20:34
*/

var Err = function(res){
	this.inRes = res;
	this.toString = function(){
		return this.inRes;
	};
};


var getNumField = function(Obj) {		//this function returns that field of the Obj which typeof is number
	for(var key in Obj){
		if(typeof Obj[key] === "number"){
			return key;
		}
	}
	return undefined;
};


var isAdded = function(arr,val){
	for(var i in arr){
		if(arr[i] == val){
			return true;
		}
	}
	return false;
};


var isNum = function(list){
	var status = true;
	for(var key in list){
		if(typeof list[key] != 'number'){
			status = false;
			break;
		}
	}
	return status;
};


var isObject = function(list){
	status = true;
	for(var key in list){
		if( !(typeof list[key] === "object") && !(list[key] == null)){
			status = false;
			break;
		}
	}
	return status;
};


var unqKeys = function(list){
	var result = [];

	list.forEach(elem =>{			//get all unique element of the arrays
		if(!isAdded(result,elem)){
			result.push(elem);
		}
	});
	console.log(result);
	return result;
};


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
};


var indexBy = function(list,field){		
	var result = {}
	if(isNum(list)){
		keys = uniqueKeys(list);
		console.log(keys);
		keys.forEach(elem =>{
			console.log(elem);
			result[elem] = elem;
		});	
		console.log(result);	
		return result;
	}
	if(isObject(list)){
		if(field != null || field != undefined){
			list.forEach(elem =>{
				keys = Object.keys(result);
				if(!isAdded(keys,elem[field])){
					result[elem[field]] = elem;	
				}
			});
		}
		return result;
	}

};


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
};



var size = function(list){
	if(list == null || list == undefined){
		return 0;
	}
	var count = 0;
	for(var key in list)
		count++;
	return count;
};



var shuffle = function(list){
	if(!isNum(list)){
		return list;
	}
	for(var i= list.length-1; i>=0; i--){
		var index = Math.floor(Math.random()*i);
		var tmp = list[i];
		list[i] = list[index];
		list[index] = tmp;
	}
	return list;
};



var pluck = function(list,field) {
	var arr = [];
	if(isObject(list) && list.length != 0){						//this function will only accept array of objects 
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
};


var reduce = function(list,iteratee,initVal){
	var result="";
	
	isFunction(iteratee);	
	if(Object.keys(list).length == 0 || list == null || list == undefined){
		return typeof initVal === 'number' ? initVal != NaN ? initVal : null:null;
	}else {
		result = getMemo(initVal,list);
		list.forEach( function(element,index) {
			result = iteratee(result,element,index,list);
		});
	}

	return result;
}

var isFunction = function(iteratee){
	if(typeof iteratee !== 'function'){
		throw new TypeError("iteratee is not a function");
	}
}

var getMemo = function(initVal,list){
	var result = initVal ? 
			initVal : isNum(list) ?	
				0 : initVal == 0 ?
					initVal:undefined;
		if(result == undefined)
			throw new Error("You must provide initial value in case of list of Objects");
	return result;
}


var range = function(first,last,inc){
	var result = [];
	switch (arguments.length) {
		case 0:
			return result;
			break;
		case 1:
			{
				checkNum(first);
				var val = -1;
				while(val ++< first)	result.push(val);
			}
			break;
		case 2:
			{
				checkNum(first,last);
				if(first>last){
					tmp = first
					first = last;
					last = tmp;
				}

				first--;	last--;
				while(first ++< last)	result.push(first);
			}
			break;
		case 3:
			{
				checkNum(first,last,inc);
				if(first>last){
					tmp = first
					first = last;
					last = tmp;
				}
				for(first;first<last; first = first+inc){
					result.push(first);
				}
				break;
			}
		default:
			break;
	}
	return result;

}

var checkNum = function () {
	for(var key in arguments){
		if(typeof arguments[key] !== 'number' || arguments[key] == NaN){
			throw new Error("Invalid arguments");
		}
	}
}