/*
* @Author: nurulnabi
* @Date:   2017-01-17 00:47:22
* @Last Modified by:   nurulnabi
* @Last Modified time: 2017-01-17 01:39:25
*/

var first = function(arr,n){
	if(n==null){
		return arr ? arr[0] : undefined;
	}
	return arr == null  ? undefined : initial(arr,arr.length-n);
};

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


console.log(first([1,2,3,4,5,6,7],3));
module.exports = first;