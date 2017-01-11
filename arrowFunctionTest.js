/*var http = require('http');
function API(){
	this.uri = 'http://nodejs.org/dist/';
};

API.prototype.get = function(resource) {
	return new Promise(function(resolve,reject){
		http.get(this.uri+resource,function(data){		// the 'this' in the get function will not point to the API uri 
			resolve(data);								//because it is being created inside a promise object hence it wil
		});												// point to the promise object.
	});
};

var api = new API();

api.get('index.json').then(function(data){
	console.log(data);
});
*/


//////// improving the above problem of this reference using the arrow function
//////// because inside the arrow function the parent 'this' is referenced by the this inside the 
//////// arrow function. It does not matter wether 'this' is being used inside newly created object

var http = require('http');
function API(){
	this.uri = 'http://nodejs.org/dist/';
};

API.prototype.get = function(resource) {
	return	new Promise((resolve,reject) => http.get(
			this.uri+resource, (data) => resolve(data)		//here 'this' will point to the API.uri
			));	
};

var api = new API();

api.get('index.json').then(function(data){
	console.log(data);
});
