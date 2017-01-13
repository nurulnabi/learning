/*
* @Author: MD NOORUL NABI ANSARI
* @Date:   2017-01-13 17:34:45
* @Last Modified by:   noor
* @Last Modified time: 2017-01-13 17:36:27
*/

var size = function(list){
	if(list == null || list == undefined){
		return 0;
	}
	var count = 0;
	for(var key in list)
		count++;
	return count;
}

module.exports = size;

