/*
* @Author: MD NOORUL NABI ANSARI
* @Date:   2017-01-17 16:02:43
* @Last Modified by:   noor
* @Last Modified time: 2017-01-17 16:02:58
*/

var rest = function(list,index) {
	list = list ? list : [];
	index = index ? index : 0;
	var result = [];
	for(var i=index; i<list.length; i++){
		result.push(list[i]);
	}
	return result;
}


module.exports = rest;