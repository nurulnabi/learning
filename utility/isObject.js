/*
* @Author: MD NOORUL NABI ANSARI
* @Date:   2017-01-12 16:43:10
* @Last Modified by:   noor
* @Last Modified time: 2017-01-12 18:43:11
*/
module.exports = function(list){
	status = true;
	for(var key in list){
		if( !(typeof list[key] === "object") && !(list[key] == null)){
			status = false;
			break;
		}
	}
	return status;
}