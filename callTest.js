/*
* @Author: MD NOORUL NABI ANSARI
* @Date:   2017-01-16 16:15:49
* @Last Modified by:   noor
* @Last Modified time: 2017-01-16 16:19:26
*/

 var clientData = {
	    id: 094545,
	    fullName: "Not Set",
	    // setUserName is a method on the clientData object​
	    setUserName: function (firstName, lastName)  {
	    // this refers to the fullName property in this object​
	    this.fullName = firstName + " " + lastName;
	    }
	}

 function getUserInput (firstName, lastName, callback, callbackObj) {
	            // The use of the Apply method below will set the "this" value to callbackObj​
	            // callback.apply (callbackObj, [firstName, lastName]);
	            callback();
}


getUserInput ("Barack", "Obama", clientData.setUserName, clientData);
	    // the fullName property on the clientData was correctly set​
	    console.log (clientData.fullName); // Barack Obama​
