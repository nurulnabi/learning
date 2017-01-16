/*
* @Author: nurulnabi
* @Date:   2017-01-17 01:45:11
* @Last Modified by:   nurulnabi
* @Last Modified time: 2017-01-17 02:02:10
*/

var compact = function(arr){
	var result = [];
	if(arr==null){	return void 0;	}
	for(var key in arr){
		switch (arr[key]) {
			case null:
				break;
			case undefined:
				break;
			case "":
				break;
			case NaN:
				break;
			case 0:
				break;
			case false:
				break;
			default:
				result.push(arr[key]);
				break;
		}
	}
	return result;
};

console.log('lkdskl');
console.log(compact({a:1,b:false}));