/*
函数的声明形式  1
 */
function  fun1(){
  console.log("hello");
}
/*
   表达式声明方式
 */
var  fun2 = function(){
  console.log("hello");
}

console.log(fun1);
console.log(fun2);

//函数的调用 函数名()
fun1();
fun2();

