function funky (o){
	o=null;
}

var x = [];
funky(x);
alert(x);

function identity (x){
	return x;
}

var identity = function identity (x){
	return x;
}
identity (3);

function add(a, b){
	return a+b;
}

function mul(a, b){
	return a*b;
}

function identityf(x){
	return function(){
		return x;
	}
}

function addf(x){
	return function (y){
		return x+y;
	}
}

function applyf(binary){
	return function (x) {
		return function (y){
			return binary(x,y);
		}
	}
}