/*
  some
  ：数组中只要有一个是满足条件的则返回true
 */
var  age=[18,19,13,12];
var  result  =age.some(function(obj,index){
  return   obj<=18;        
})
console.log(result);
