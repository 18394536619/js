//参数  
/*
  参数传递的过程中，如果传递的是基本数据类型
  那么这时是将值实参值复制一份交给形参，所以
  这时形参的改变不会影响实参本身

*/
//形参:声明一个方法的时候方法中规定的参数 
/*function   test(a){
	 a=20;
	 console.log(a);
}

//实参：调用一个方法的时候实际传递的参数
var  a  =10;
console.log(a+"改之前");//10
test(a);
console.log(a+"改之后");//10
*/

function  xuxi(obj){//210
  obj={};//211
  obj.color="绿色";
}

var  room ={
 color:"红色"
}//210
console.log(room.color)
xuxi(room);//210
console.log(room.color);
