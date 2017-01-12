/*
* @Author: MD NOORUL NABI ANSARI
* @Date:   2017-01-12 18:51:39
* @Last Modified by:   noor
* @Last Modified time: 2017-01-12 19:16:13
*/

var isNum = require('./utility/isNum');
var Err = require('./utility/Err');
var isObject = require('./utility/isObject');

var max = function(list, iteratee){
	if(!Array.isArray(list)){
		throw new Err("Error: kindly provide an array of number or objects");
	}
		
	var max = -Infinity;

	if (isNum(list)) {
		list.forEach(num => {
			if(num>max){
				max = num;
			}
		})
	}
	return max;
};
var arr = require('./randomInteger');
console.log(max(arr));