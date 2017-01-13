/*
* @Author: MD NOORUL NABI ANSARI
* @Date:   2017-01-13 17:24:41
* @Last Modified by:   noor
* @Last Modified time: 2017-01-13 17:32:36
*/

// this program shuffles the array of integers only.

var isNum = require('./utility/isNum');

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
}

module.exports = shuffle;