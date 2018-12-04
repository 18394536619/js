function  Person(name){
  this.name=name;
}
/*
  Person.prototype=new Object();
*/
//原型
/*
var xx  =Person.prototype;//__proto__
console.log(xx);
console.log(xx instanceof Object);*/
Person.prototype={};
console.log(Person.prototype instanceof Object);
//Object  和Person的继承关系
//让Person的原型指向Object的一个对象









