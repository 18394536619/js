/*
  检查数组中的某一项是不是都符合要求
 */

var   worker1={
  name:"李四",
  age:38
};
var  worker2={
  name:"赵六",
  age:13
}
var  worker3 ={
  name:"王大拿",
  age:60     
}
var  arr=[worker1,worker2,worker3];
var  result =arr.every(function(obj,index){
//判断每一个对象的age属性是不是大于18
   return  obj.age>=18;        
 })
console.log(result);




