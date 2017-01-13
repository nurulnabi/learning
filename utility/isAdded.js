/*
* @Author: MD NOORUL NABI ANSARI
* @Date:   2017-01-13 15:51:31
* @Last Modified by:   noor
* @Last Modified time: 2017-01-13 15:57:00
*/


// this function will check wether 'val' has already been added to the arr or not

module.exports = function(arr,val){
	for(var i in arr){
		if(arr[i] == val){
			return true;
		}
	}
	return false;
}
