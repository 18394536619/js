/*
  使用字面量的形式
 */
var   obj={
 name:"张三",
 age :20,
 say:function(){
   console.log("hello");
 } 
}
obj.say();//自己写的
obj.toString();//object中继承来的
console.log("--------------");
console.log("name" in   obj);
console.log("toString" in  obj);
console.log("hello" in obj);
//hasOwnProperty
console.log("----------")
console.log(obj.hasOwnProperty("name"));//true
console.log(obj.hasOwnProperty("toString"));//fasle
console.log(obj.hasOwnProperty("hello"));//false
// propertyIsEnumerable 
console.log("--------------")
console.log(obj.propertyIsEnumerable("name"));
console.log(obj.propertyIsEnumerable("hasOwnProperty"))




