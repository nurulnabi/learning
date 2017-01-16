/*
* @Author: nurulnabi
* @Date:   2017-01-17 00:58:42
* @Last Modified by:   nurulnabi
* @Last Modified time: 2017-01-17 01:38:14
*/

var initial = function(array, n) {
	var result = [];
	if(array == null){
		return undefined;
	}
	for(var i=0; i<Math.max(0,array.length-(n==null ? 0 : n));i++){
		result.push(array[i]);
	}
	return result;
};

console.log(initial());
module.exports = initial;
