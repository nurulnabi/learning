/*
* @Author: noor
* @Date:   2017-01-16 00:06:39
* @Last Modified by:   noor
* @Last Modified time: 2017-01-16 01:13:48
*/

var range = function(first,last,inc){
	var result = [];
	switch (arguments.length) {
		case 0:
			return result;
			break;
		case 1:
			{
				checkNum(first);
				var val = -1;
				while(val ++< first)	result.push(val);
			}
			break;
		case 2:
			{
				checkNum(first,last);
				if(first>last){
					tmp = first
					first = last;
					last = tmp;
				}

				first--;	last--;
				while(first ++< last)	result.push(first);
			}
			break;
		case 3:
			{
				checkNum(first,last,inc);
				if(first>last){
					tmp = first
					first = last;
					last = tmp;
				}
				for(first;first<last; first = first+inc){
					result.push(first);
				}
				break;
			}
		default:
			break;
	}
	return result;

}

var checkNum = function () {
	for(var key in arguments){
		if(typeof arguments[key] !== 'number' || arguments[key] == NaN){
			throw new Error("Invalid arguments");
		}
	}
}


console.log(range(3,5));