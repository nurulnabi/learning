/*
* @Author: MD NOORUL NABI ANSARI
* @Date:   2017-01-13 18:03:52
* @Last Modified by:   noor
* @Last Modified time: 2017-01-13 18:56:50
*/

function globalFunction(list,callback){
	var memo = "";
	list.forEach(elem => {memo = callback(memo,elem);});
	console.log(memo);
}


globalFunction([1,2,3,4,5],function(initVal,val){ return initVal.concat(val);})