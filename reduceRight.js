/*
* @Author: nurulnabi
* @Date:   2017-01-17 00:35:26
* @Last Modified by:   noor
* @Last Modified time: 2017-01-17 10:41:07
*/

var reduceRight = function(list,iteratee,memo){
	if(arguments.length<3){
		throw new Error("You must provide atleast three arguments");
	}
	var len = list.length;
	var result = memo;
	for(var i=len-1; i>=0; i--){
		console.log(list[i]);
		result = iteratee(result,list[i]);
	}
	return result;
}

module.exports = reduceRight;