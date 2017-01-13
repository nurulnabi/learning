/*
* @Author: MD NOORUL NABI ANSARI
* @Date:   2017-01-13 14:38:22
* @Last Modified by:   noor
* @Last Modified time: 2017-01-13 17:42:20
*/

var siz = require('./size');
var range = require('underscore').range;

var randNum = [];
var count = 20;
while(count --> 0){
	randNum = {};
	n = Math.floor(Math.random()*100);
	range(n).forEach((i)=>randNum[i]='noor');
	console.log(n,"->",siz(randNum),"->",randNum);

}
