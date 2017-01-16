/*
* @Author: MD NOORUL NABI ANSARI
* @Date:   2017-01-16 17:31:34
* @Last Modified by:   noor
* @Last Modified time: 2017-01-16 17:58:14
*/

var unzip = function(arr) {
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
}

console.log(unzip([["moe", 30, true,234], ["larry", 40, false], ["curly", 50, false]]));
// console.log(unzip([["moe", 30, true], ["larry", 40, false], ["curly", 50, false]]));
module.exports = unzip;