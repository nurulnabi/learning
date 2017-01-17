/*
* @Author: noor
* @Date:   2017-01-15 10:30:15
* @Last Modified by:   noor
* @Last Modified time: 2017-01-17 15:01:56
*/
var _underscore = {};

_underscore.Err = function(res){
	this.inRes = res;
	this.toString = function(){
		return this.inRes;
	};
};

_underscore.getNumField = function(Obj) {		//this function returns that field of the Obj which typeof is number
	for(var key in Obj){
		if(typeof Obj[key] === "number"){
			return key;
		}
	}
	return undefined;
};

_underscore.isAdded = function(arr,val){
	for(var i in arr){
		if(arr[i] == val){
			return true;
		}
	}
	return false;
};

_underscore.isNum = function(list){
	var status = true;
	for(var key in list){
		if(typeof list[key] != 'number'){
			status = false;
			break;
		}
	}
	return status;
};

_underscore.isObject = function(list){
	status = true;
	for(var key in list){
		if( !(typeof list[key] === "object") && !(list[key] == null)){
			status = false;
			break;
		}
	}
	return status;
};

_underscore.unqKeys = function(list){
	var result = [];

	list.forEach(elem =>{			//get all unique element of the arrays
		if(!isAdded(result,elem)){
			result.push(elem);
		}
	});
	console.log(result);
	return result;
};

_underscore.contains = function(list,val,fromIndex = -1){
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

_underscore.indexBy = function(list,field){		
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

_underscore.where = function(list,obj){
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


_underscore.size = function(list){
	if(list == null || list == undefined){
		return 0;
	}
	var count = 0;
	for(var key in list)
		count++;
	return count;
};


_underscore.shuffle = function(list){
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


_underscore.pluck = function(list,field) {
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

_underscore.reduce = function(list,iteratee,initVal){
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
_underscore.isFunction = function(iteratee){
	if(typeof iteratee !== 'function'){
		throw new TypeError("iteratee is not a function");
	}
}
_underscore.getMemo = function(initVal,list){
	var result = initVal ? 
			initVal : isNum(list) ?	
				0 : initVal == 0 ?
					initVal:undefined;
		if(result == undefined)
			throw new Error("You must provide initial value in case of list of Objects");
	return result;
}

_underscore.range = function(first,last,inc){
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
_underscore.checkNum = function () {
	for(var key in arguments){
		if(typeof arguments[key] !== 'number' || arguments[key] == NaN){
			throw new Error("Invalid arguments");
		}
	}
}

_underscore.isEqual = function (first, second) {
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
_underscore.caseObject = function (first,second) {
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
_underscore.compareObject = function (first,second) {
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

_underscore.customTypeof = function (first,second) {	//this will check typeof arguments if found same then return their type
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


_underscore.union = function () {
	var totalArr = arguments.length;
	var arr=[];
	for(var i=0; i<totalArr; i++){
		if(isNum(arguments[i])){
			makeSingleArr(arguments[i],arr);
		}
	}
	return arr;
}

_underscore.makeSingleArr = function(arg,arr){
	arg.forEach(function(val) {
		if(arr.indexOf(val)==-1){
			arr.push(val);
		}
	});
}

_underscore.zip = function() {
	var arr = argumentsToArray(arguments);
	var maxLen = getMaxLength(arr);
	var len = arr.length;
	var index = 0;
	var result = [];
	var subResult = [];
	for(var i=0; i<maxLen; i++){
		subResult = [];
		arr.forEach(function(subArr){
			subResult.push(subArr[i]);
		})
		result.push(subResult);
	}
	return result;
};

_underscore.getMaxLength = function(args){
	var max = -Infinity;
	args.forEach(function(arr){
		if(arr.length>max){
			max = arr.length;
		}
	})
	return max;
};

_underscore.argumentsToArray = function(args){
	var arr = [];
	for(var key in args){
		arr.push(args[key]);
	}
	return arr;
};


_underscore.unzip = function(arr) {
	var maxLen = arr.length;
	var len = arr[0].length;
	var index = 0;
	var result = [];
	var subResult = [];
	for(var i=0; i<len; i++){
		subResult = [];
		arr.forEach(function(subArr){
			subResult.push(subArr[i]);
		});
		result.push(subResult);
	}
	return result;
};

_underscore.object = function(keys,values) {
	var obj = {};
	var len = Array.isArray(keys) ? keys.length : keys === undefined ? {} : keys.length;
	values = values ? values : {};
	for(var i=0; i<len; i++){
		obj[keys[i]] = values[i];
	}
	return obj;
};

_underscore.omit = function(obj,iteratee){
	obj = obj ? obj : {};
	iteratee = iteratee ? iteratee : undefined;

	if(typeof iteratee === 'function'){
		for(var key in obj){
				if(iteratee(obj[key],key,obj)){
					delete obj[key];
			}
		}
	}else if(Array.isArray(iteratee)){
		iteratee.forEach(function(key){
			delete obj[key];
		});
	}else{
		delete obj[iteratee];
	}
	return obj;
}

_underscore.allKeys = function(obj) {
	obj = obj ? obj : {};
	var tmpObj = obj;
	var keys = [];
	for(;tmpObj != Object.prototype; tmpObj=Object.getPrototypeOf(tmpObj)){
		var arr = Object.getOwnPropertyNames(tmpObj);
		arr.forEach(function(prop){
			keys.push(prop);
		});
	}

	return keys;
}

_underscore.keyS = function(obj) {
	obj = obj ? obj : {};
	return Object.getOwnPropertyNames(obj);
}


_underscore.property = function (prop) {
 	return function(obj){
 		obj = obj ? obj : {};
 		return obj[prop];
 	};
 }

 _underscore.propertyOf = function (obj) {
 	obj = obj ? obj : {};
 	return function(prop){
 		return obj[prop];
 	};
 }


_underscore.invert = function (obj) {
	obj = obj ? obj : {};
	var result = {};
	if(typeof obj !== 'object'){
		return result;
	}
	for(var key in obj){
		result[obj[key]] = key;
	}
	return result;
}


_underscore.pairs = function(obj){
	obj = obj ? obj : {};
	var result = [];
	var subResult = [];
	if(typeof obj === 'object'){
		for(var key in obj){
			subResult = [];
			subResult.push(key,obj[key]);
			result.push(subResult);
		}

	}
	return result;
}


_underscore.intersection = function () {
	var result = [];
	if(arguments.length == 0 ){
		return result;
	}
	if(arguments.length==1){
		return arguments[0] ? singleArg(arguments[0]) : [];
	}
	result = firstTwo(arguments[0],arguments[1]);
	for(var i=2; i<arguments.length; i++){
		arr = arguments[i];
		for(var key in arr){
			if(result.indexOf(arr[key])>=0){
				result.push(arr[key]);
			}
		}
	}
	return result;
}


_underscore.singleArg = function(arr){
	var result = [];
	for(var key in arr){
			result.push(arr[key]);
	}
	return result;
}

_underscore.firstTwo = function (arr1,arr2) {
	var result = [];
	for(var key in arr1){
		if(arr2.indexOf(arr1[key])>=0){
			result.push(arr1[key]);
		}
	}
	return result;
}


_underscore.initial = function(array, n) {
	var result = [];
	for(var i=0; i<=Math.max(0,array.length-(n==null ? 1 : n));i++){
		result.push(array[i]);
	}
	return result;
};


_underscore.initial = function(array, n) {
	var result = [];
	if(array == null){
		return undefined;
	}
	for(var i=0; i<Math.max(0,array.length-(n==null ? 0 : n));i++){
		result.push(array[i]);
	}
	return result;
};

_underscore.first = function(arr,n){
	if(n==null){
		return arr ? arr[0] : undefined;
	}
	return arr == null  ? undefined : initial(arr,arr.length-n);
};


_underscore.compact = function(arr){
	var result = [];
	if(arr==null){	return void 0;	}
	for(var key in arr){
		switch (arr[key]) {
			case null:
				break;
			case undefined:
				break;
			case "":
				break;
			case NaN:
				break;
			case 0:
				break;
			case false:
				break;
			default:
				result.push(arr[key]);
				break;
		}
	}
	return result;
};


_underscore.reduceRight = function(list,iteratee,memo){
	if(arguments.length<3){
		throw new Error("You must provide atleast three arguments");
	}
	var len = list.length;
	var result = memo;
	for(var i=len-1; i>=0; i--){
		console.log(list[i]);
		result = iteratee(result,list[i]);
	}
	return result;
};


_underscore.reduceLeft = function(list,iteratee,memo){
	if(arguments.length<3){
		throw new Error("You must provide atleast three arguments");
	}
	var len = list.length;
	var result = memo;
	for(var i=0; i<len; i++){
		console.log(list[i]);
		result = iteratee(result,list[i]);
	}
	return result;
};



_underscore.find = function(list,iteratee) {
	if(typeof iteratee !== 'function' || !Array.isArray(list)){
		return void 0;
	}
	for(var i=0; i<list.length; i++){
		if(iteratee(list[i])){
			return list[i];
			break;
		}
	}

	return undefined;
};


_underscore.find = function(list,iteratee) {
	if(!Array.isArray(list)){
		return void 0;
	}
	if(typeof iteratee === 'function'){
		for(var i=0; i<list.length; i++){
			if(iteratee(list[i])){
				return list[i];
				break;
			}	
		}
	}else{						//in case of iteratee is an object
		for(var i=0; i<list.length; i++){
			if(compareObjILen(iteratee,list[i])){
				return list[i];
			}
		}
	}
	return undefined;
};


_underscore.findWhere = function(list,iteratee) {
	if(!Array.isArray(list)){
		return void 0;
	}
	if(typeof iteratee === 'function'){
		for(var i=0; i<list.length; i++){
			if(iteratee(list[i])){
				return i;
				break;
			}	
		}
	}else{						//in case of iteratee is an object
		for(var i=0; i<list.length; i++){
			if(compareObjILen(iteratee,list[i])){
				return i;
			}
		}
	}
	return undefined;
};


_underscore.compareObjILen = function (first,second) {
	var status = true;
	for(var key in first){
		if(first[key] !== second[key]){
			status = false;
			break;
		}
	}
	return status;
};


_underscore.indexOf = function (list,val) {
	list = list ? list : [];
	if(val == null){
		return -1;
	}

	for(var key in list){
		elem = list[key];
		if(typeof elem === 'object'){			//in case list is array of objects
			if(compareObject(val,elem)){
				return key;
			}
		}
		if(elem === val){
			return key;
		}
	}
	return -1;
};


_underscore.lastIndexOf = function (list,val) {
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



_underscore.findLastIndexOf = function (list,val) {
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


_underscore.sortedIndex = function (list,value,iteratee) {
	if(list == null || value == null){
		return undefined;
	}

	if(typeof iteratee !== 'function'){
		list  = isObject(list) ? pluck(list,iteratee) : list;
		return binarySearch(list,value[iteratee]);	
	}else {
		return iteratee(list,value);
	}

	function binarySearch(list,value){
		var low  = 0,
			high = list.length-1;
		var mid;
		while(low<=high){
			mid = Math.floor((low+high)/2);
			if(list[mid]<=value && list[mid+1]>=value){
				return mid+1;
			}else if(list[mid]<value) {
				low = mid+1;
			}else {
				high = mid-1; 
			}

		}
		return !low ? low : high;		//in case if location is either end
	}
};








module.exports = _underscore;	