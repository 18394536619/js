function   test(a,b){
	console.log(a);
    console.log(b);
	/*return 代表调用完成这个方法后会有一个
	结果产生并返回，返回到调用方法的位置*/
   return  a+b;
}
function  test1(a,b){
  console.log(a+b);
}
/*
var x =  test(10,20);
var  y = test1();
console.log(x);
console.log(y);
*/

var  rsu  = test();
console.log(rsu);//NAN