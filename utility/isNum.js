/*
* @Author: MD NOORUL NABI ANSARI
* @Date:   2017-01-12 17:42:40
* @Last Modified by:   noor
* @Last Modified time: 2017-01-12 18:43:06
*/

module.exports = function(list){
	var status = true;
	for(var key in list){
		if(typeof list[key] != 'number'){
			status = false;
			break;
		}
	}
	return status;
}