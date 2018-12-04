/*
  序列化：将一个对象转化成一个JSON格式
*/
var   obj ={
 name:"张三",
 age:20     
}
var  json =JSON.stringify(obj);
console.log(json);
//反序列化   JSON ---》js中对象
var  oo = JSON.parse(json);
console.log(oo);
