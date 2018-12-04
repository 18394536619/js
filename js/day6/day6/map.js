/*
  map
  :将数组中的数据和条件对比后形成的结果形成数组返回
 */
var  arr=[10,18,9,78];
var  result  =arr.map(function(obj,index){
   return   obj>=18;        
})
console.log(result);
