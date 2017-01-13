/*
* @Author: MD NOORUL NABI ANSARI
* @Date:   2017-01-13 11:31:44
* @Last Modified by:   noor
* @Last Modified time: 2017-01-13 11:58:50
*/

module.exports = function(Obj) {		//this function returns that field of the Obj which typeof is number
	for(var key in Obj){
		if(typeof Obj[key] === "number"){
			return key;
		}
	}
	return undefined;
}
