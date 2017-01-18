/*
* @Author: nurulnabi
* @Date:   2017-01-18 01:04:03
* @Last Modified by:   nurulnabi
* @Last Modified time: 2017-01-18 07:41:46
*/

var _ = function(obj) {
  if (obj instanceof _) return obj;
  if (!(this instanceof _)) return new _(obj);
  this._wrapped = obj;
};


_.len = function(list){
	console.log(list.length);
}

var push = Array.prototype.push;
var arr = _([]);
arr.push(1);
arr.push(1);
arr.push(1);
arr.push(1);
arr.push(1);
arr.push(1);

_.len(arr);

arr.len();