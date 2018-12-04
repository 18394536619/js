function Person(name){
   this.name=name;
}
//所有对象都能都能调用的方法放置到prototype
Person.prototype.sayName=function(name){
   console.log(name);
}
Person.prototype.eat=function(some){
  console.log(some);
}
console.log(Person.prototype)
console.log(Person)

var p1  =new Person("张三");
var p2  = new Person("李四");
console.log(p1==p2);//false
console.log(p1.constructor==p2.constructor);
console.log(p1.sayName==p2.sayName);









