/*
* @Author: MD NOORUL NABI ANSARI
* @Date:   2017-01-13 14:38:22
* @Last Modified by:   noor
* @Last Modified time: 2017-01-16 17:22:19
*/

var range = require('underscore').range;
var zip = require('./zip');

var randNum = [];
var count = 100;
while(count --> 0){
	var arr1 =[];
	var arr2 = [];
	var arr3 = [];		//diferent values
	var arr4 = [];		//diferent length
	var n2;
	n = Math.floor(Math.random()*10);
	n2 = Math.floor(Math.random()*7);
	range(n).forEach((i)=>arr1.push(Math.floor(Math.random()*20)));
	range(n).forEach((i)=>arr2.push(Math.floor(Math.random()*20)));
	range(n2).forEach((i)=>arr3.push(Math.floor(Math.random()*20)));
	
	console.log(arr1);
	console.log(arr2);
	console.log(arr3);
	console.log();
	console.log(zip(arr1,arr2));
	console.log(zip(arr1,arr3));
	console.log(zip(arr1,arr2,arr3));
	console.log();

}
