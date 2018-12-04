/*
  arguments 是一个类数组对象
  所以它包含数组的特性
  同时也包含对象的特性
  并且只能在函数中是使用
*/
//计算任意多个数字相加的结果
function  test(){
  console.log(arguments);
  //获取类数组中的数据的长度
  console.log(arguments.length);
  console.log("----------");

   var  result  =0;
   for(var  index  in arguments){
	
       var  val = arguments[index];
       result=result+val;
   }
   console.log(result);
   return result;
}
test(1,2,3)
test(4,8,12,55);