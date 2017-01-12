module.exports = function(res){
	this.inRes = res;
	this.toString = function(){
		return this.inRes;
	};
};