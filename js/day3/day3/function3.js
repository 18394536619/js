/*
   函数中也可以声明属性和方法
 */
function test(){
  var a  =10;
  console.log(a);
  function test1(){
    console.log("inner");
  }
  test1();
}
test();
