/*
* @Author: MD NOORUL NABI ANSARI
* @Date:   2017-01-17 10:43:40
* @Last Modified by:   noor
* @Last Modified time: 2017-01-17 10:44:21
*/

var reduceLeft = function(list,iteratee,memo){
	if(arguments.length<3){
		throw new Error("You must provide atleast three arguments");
	}
	var len = list.length;
	var result = memo;
	for(var i=0; i<len; i++){
		console.log(list[i]);
		result = iteratee(result,list[i]);
	}
	return result;
}

module.exports = reduceLeft;