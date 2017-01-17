/*
* @Author: MD NOORUL NABI ANSARI
* @Date:   2017-01-17 13:09:07
* @Last Modified by:   noor
* @Last Modified time: 2017-01-17 15:01:35
*/

var isObject = require('./utility/isObject');
var pluck = require('./pluck');

var sortedIndex = function (list,value,iteratee) {
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
// var arr = require('./arrSorted');

// console.log(sortedIndex(arr,{
//     "fruit": "cherry",
//     "phone": "+1 (931) 405-3843",
//     "company": "apple",
//     "name": {
//       "last": "Serrano",
//       "first": "Graham"
//     },
//     "age": 58,
//     "salary": 9088747
//   },'age'));
module.exports = sortedIndex;