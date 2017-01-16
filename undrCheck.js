/*
* @Author: nurulnabi
* @Date:   2017-01-17 01:15:10
* @Last Modified by:   nurulnabi
* @Last Modified time: 2017-01-17 01:18:41
*/

(function(){
	// Establish the root object, `window` in the browser, or `exports` on the server.
	var root = this;

	// Save the previous value of the `_` variable.
	var previousUnderscore = root._;

	// Create a safe reference to the Underscore object for use below.
	var _ = function(obj) {
	  if (obj instanceof _) return obj;
	  if (!(this instanceof _)) return new _(obj);
	  this._wrapped = obj;
	};

	// Export the Underscore object for **Node.js**, with
	// backwards-compatibility for the old `require()` API. If we're in
	// the browser, add `_` as a global object.
	if (typeof exports !== 'undefined') {
	  if (typeof module !== 'undefined' && module.exports) {
	    exports = module.exports = _;
	  }
	  exports._ = _;
	} else {
	  root._ = _;
	}

	// Run Underscore.js in *noConflict* mode, returning the `_` variable to its
	// previous owner. Returns a reference to the Underscore object.
	_.noConflict = function() {
	  root._ = previousUnderscore;
	  return this;
	};


	_.intersection = function () {
		var result = [];
		if(arguments.length == 0 ){
			return result;
		}
		if(arguments.length==1){
			return arguments[0] ? _.singleArg(arguments[0]) : [];
		}
		result = _.firstTwo(arguments[0],arguments[1]);
		for(var i=2; i<arguments.length; i++){
			arr = arguments[i];
			for(var key in arr){
				if(result.indexOf(arr[key])>=0){
					result.push(arr[key]);
				}
			}
		}
		return result;
	}


	_.singleArg = function(arr){
		var result = [];
		for(var key in arr){
				result.push(arr[key]);
		}
		return result;
	}

	_.firstTwo = function (arr1,arr2) {
		var result = [];
		for(var key in arr1){
			if(arr2.indexOf(arr1[key])>=0){
				result.push(arr1[key]);
			}
		}
		return result;
	}





}.call(this));