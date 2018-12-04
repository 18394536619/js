//纯粹的原型模式
function  Person(){
}
//属性和方法全部放到原型中
Person.prototype.name="zhangsan";
Person.prototype.say=function(){
  console.log("hello");
}
var per  =new Person();
console.log(per.name);
Person.prototype.name="lisi";
var per1  = new Person();
Person.prototype.name="赵六";
console.log(per.name);//赵六
console.log(per1.name);//赵六











