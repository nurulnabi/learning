/*
* @Author: MD NOORUL NABI ANSARI
* @Date:   2017-01-16 15:20:08
* @Last Modified by:   noor
* @Last Modified time: 2017-01-16 15:53:25
*/



var intersection = function () {
	var totalArr = arguments.length;
	var arr=[];
	var firstTwo = [];
	var i = getFirstTwo(arguments,firstTwo);
	firstIntersect(firstTwo[0],firstTwo[1]);
	for(i; i<totalArr; i++){
		if(Array.isArray(arguments[i])){
			makeSingleArr(arguments[i],arr);
		}
	}
	return arr;
}

var getFirstTwo = function(arr,firstTwo){
	var count = 0;
	var i=0;
	for(var i=0; i<arr.length; i++){
		if(Array.isArray(arr[i])){
			firstTwo.push(arr[i]);
			count++
		}
		if(count>=2){
			break;
		}
	}
	return i;
}

var makeSingleArr = function(arg,arr){
	arg.forEach(function(val) {
		if(arr.indexOf(val)>=0	){
			arr.push(val);
		}
	});
}

var arr = [];
var firstIntersect = function(first,second,arr,i,j){
	if(i>first.length || j>second.length){
		return;
	}
	if(first[i]==second[j]){
		arr.push(first[i]);
	}else{
		i=i+1;
		firstIntersect(first,second,arr,i,j);
		j=j+1;
		firstIntersect(first,second,arr,i,j);
	}
}
firstIntersect([1,2,3,4,5,6],[2,4,5,7,8,9],arr,0,0);
console.log(arr);
// console.log( firstIntersect([1,2,3,4,5,6],[2,4,5,7,8,9]));
module.exports = intersection;