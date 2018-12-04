/*
  匿名函数 不能单独存在
  1.匿名函数当做参数存在
  2.匿名函数声明完成之后立马调用
*/
/*var  num  =(function(a,b){
  console.log("hello");
  console.log(10,20);
  return a+b;
})(10,20);
console.log(num);*/
//a  传递的是一个函数
function  test(a){
    a();
}
var  fun1  =function(){
   console.log("hello");
}
function  fun2(){
  console.log("world");
}
//test(fun1);
//test(fun2);




test(function(){
  console.log("匿名函数");
})