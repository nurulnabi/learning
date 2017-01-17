/*
* @Author: MD NOORUL NABI ANSARI
* @Date:   2017-01-17 16:03:23
* @Last Modified by:   noor
* @Last Modified time: 2017-01-17 16:30:20
*/

var sample = function(list,num) {
	list = list ? list : [];
	num = num ? num : 1;

	var result = [];
	var subResult = [];
	for(var i=num; i>0; i--){
		var index = Math.floor(Math.random()*len);
		for(;;){					//this chooses unique value to be inserted in result
			if(subResult.indexOf(list[index]) == -1){		//wether this value has been inserted on not
				subResult.push(list[index]);
				break;
			}
			var index = Math.floor(Math.random()*len);
		}
	}
	for(var i=0; i<subResult.length; i++){
		result.push(subResult[i]);
	}

	return result;
}


module.exports = sample;