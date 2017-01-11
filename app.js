// adding two arrays using SIMD ------------use --harmony_simd as an option for enabling simd
// var SIMD = require('simd');

/*var a = SIMD.Int32x4(2,3,4,5);
var b = SIMD.Int32x4(9,8,7,6);

var c = SIMD.Int32x5.add(a,b);
// console.log(c);*/



// testing with setTimeout
var fnTimeOut = function(intrvl) {
	console.log("this is start");

	setTimeout(function cb(){
		console.log('this is a msg from call back');
	});

	console.log('this msg is after the call back');

	setTimeout(function cb1(){
		console.log('this is a msg from call back1');
	});

	console.log('this is the end');
}

// fnTimeOut.toString();

/////////////////practising promise in JS////////////////////

/*let promiseToClean = new Promise(function(resolve,reject){
	let isClean = false;
	if(isClean){
		resolve("clean");
	}else{
		reject("not clean");
	}
});

promiseToClean.then(function(fromResolve){
	console.log('the room is '+fromResolve);
}).catch(function(fromReject){
	console.log('the room is '+fromReject);
});

*/

/////////////////////////////////practisizing mongodb/////////////////////////////////////////////////

var db = require("mongodb").MongoClient;

//Open the connection to the server
db.connect('mongodb://localhost:27017/demo',function(err,db){
	if(err) throw err;

	//find one document in our collection
	db.collection('things').find({},function(err,doc){
		if(err) throw err;

		//Print the result
		console.dir(doc);

		//close the DB
		db.close();
	});
});

//////////////////////////////////use express swig and mongo/////////

var express = require('express'),
	app = express(),
	cons = require('cosolidate'),
	db = require('mongodb').MongoClient,
	server = require('mongodb').Server;

app.engine('html',cons.swig);

