
/*
  Object 中常用的方法和属性
 */
var  obj  ={
 name:"zhangsan"
}
var  obj1  = new Object();
obj1.name="liis";

console.log(obj.constructor);
console.log(obj1.constructor);

var  value  = obj.valueOf();
console.log(value);
var  str  = obj.toString();
console.log(str);
