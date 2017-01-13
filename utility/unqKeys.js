/*
* @Author: MD NOORUL NABI ANSARI
* @Date:   2017-01-13 15:07:13
* @Last Modified by:   noor
* @Last Modified time: 2017-01-13 16:50:10
*/

// this function will sort list and will remove the duplicate keys

var isAdded = require('./isAdded');

module.exports = function(list){
	var result = [];

	list.forEach(elem =>{			//get all unique element of the arrays
		if(!isAdded(result,elem)){
			result.push(elem);
		}
	});
	console.log(result);
	return result;
}