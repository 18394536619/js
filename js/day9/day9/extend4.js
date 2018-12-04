function Person(name,age){
  this.name=name;
  this.age=age;
}
Person.prototype={
  constructor:Person,
  say:function(){
    console.log(this.name);
  }
}
function Student(name,age,school){
    Person.call(this,name,age);
	this.school =school;
}
Student.prototype=new Person();

Student.prototype.constructor=Student;
//添加特有方法
Student.prototype.study=function(){
  console.log("好好学习天天向上");
}
var  xx =
new  Student("zhangsan",22,"清华");
//打印属性
console.log(xx.name);
xx.say();
xx.study();
console.log(xx.constructor);
console.log(Object.prototype.isPrototypeOf(xx));


