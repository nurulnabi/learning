var _ = require('underscore');

var arr = [1,2,3,4,45,5,6];

console.log(_.where(arr,null));

var obj = {
	'name':"noor",
	'age':12
};

for(var item in obj){
	console.log(item);
}

var a = require('./arr');
console.log(Array.isArray(a));
console.log(a);