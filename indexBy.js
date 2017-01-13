/*
* @Author: MD NOORUL NABI ANSARI
* @Date:   2017-01-13 15:03:34
* @Last Modified by:   noor
* @Last Modified time: 2017-01-13 16:52:11
*/

/*	
*	This function takes two parameters
		1-> list:{
				integer,
				objects
			}	
		2-> field : in case of list of objects 'field' will indicate which field will be used as index
*/

var isNum = require('./utility/isNum');
var isObject = require('./utility/isObject');
var uniqueKeys = require('./utility/unqKeys');
var isAdded = require('./utility/isAdded');

var indexBy = function(list,field){		
	var result = {}
	if(isNum(list)){
		keys = uniqueKeys(list);
		console.log(keys);
		keys.forEach(elem =>{
			result[elem] = elem;
		});		
		return result;
	}
	if(isObject(list)){
		if(field != null || field != undefined){
			list.forEach(elem =>{
				keys = Object.keys(result);
				if(!isAdded(keys,elem[field])){
					result[elem[field]] = elem;	
				}
			});
		}
		return result;
	}

}

module.exports = indexBy;