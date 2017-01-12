function Err(res){
	this.inRes = res;
	this.toString = function(){
		return this.inRes;
	};
}


var where = function(list,obj){
	var arr = [];				// will hold the extracted objects
	if(arguments.length != 2){	//if the number of arguments passed is less than 2 throw an error
		throw new Err("Error: Kindly pass a list and an object");
	}

	if(!Array.isArray(list)){		// first argument must an array type 
		throw new Err("TypeError: list is not an array");
	}
	if(Object.keys(obj).length == 0){
		throw new Err("Error: Oject with no properties");
	}

	if(typeof obj === 'object' && obj != null){			//iteratively check wether any object in list has the values from obj
		var keys = Object.keys(obj);

		list.forEach(item => {
			var status = true;
			for(var k in keys){
				if(item[keys[k]] != obj[keys[k]]){
					status = false;
					break;
				}
			}
			if(status){
				arr.push(item);
			}
		})
		
	}else{
		return arr;
	}
	return arr;
}