/*
   声明式函数在代码正式执行之前就已经加载近环境中了，所以这种函数任意位置都可以调用
 */
/*test();
function  test(){
  console.log("hello");
}
test();
*/
/*
   表达式式函数就跟变量特性是一样的，不会被率先加载，而是执行到之后才会被加载，所以这种函数的调用必须在声明之后
 */
//test();
var  test  = function(){
  console.log("hello");
}
test();

