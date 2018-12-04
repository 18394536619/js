/*var  arr =[10,20];
console.log(arr.length);
arr.length=10;
console.log(arr.length);*/
function  test(){
	console.log(arguments);
	console.log(arguments.length);
	arguments.length=100;
	console.log(arguments.length);
	//length  callee
}
test(10,20)