/*
* @Author: MD NOORUL NABI ANSARI
* @Date:   2017-01-17 15:35:06
* @Last Modified by:   noor
* @Last Modified time: 2017-01-17 15:51:50
*/

var without = function() {
	var list = arguments[0] ? arguments[0] : [];
	var remvList = [];
	for(var i=1; i<arguments.length; i++){
		remvList.push(arguments[i]);
	}
	for(var i=0; i<remvList.length; i++){
		rm = list.indexOf(remvList[i]);
		while(rm>-1){					//repeatedly remove the desired value
			list.splice(rm,1);
			rm = list.indexOf(remvList[i]);
		}
	}
	return list;
}


module.exports = without;