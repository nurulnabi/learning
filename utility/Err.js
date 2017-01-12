/*
* @Author: MD NOORUL NABI ANSARI
* @Date:   2017-01-12 16:45:17
* @Last Modified by:   noor
* @Last Modified time: 2017-01-12 18:43:00
*/
module.exports = function(res){
	this.inRes = res;
	this.toString = function(){
		return this.inRes;
	};
};