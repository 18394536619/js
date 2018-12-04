/*
  函数可以当做参数进行传递
*/
function  test(fun){
/*
  fun = x;
  x-->function(){
  }
  fun=function(){
  }
*/
// 方法的调用
    fun();
}
/*
var  x  = function(){
   console.log("hello")
}
test(x);*/
// 匿名函数
/*test(function(){
   console.log("hello");
});*/

(function(){
  console.log("hello");
})()

/*
var  num  =10;
test(num);
test(10)*/





