function Person(name,age){
  this.name=name;
  this.age=age;
}
Person.prototype={
   constructor:Person,
   eat:function(){
     console.log("吃大闸蟹");
   },
   sleep:function(){
     console.log("美美的睡");
   }
}
//Student
function  Student(name,age){
  this.name=name;
  this.age=age;
}
//Student 的原型指向Person 的一个对象
Student.prototype=new Person();
Student.prototype.study=function(){
  console.log("好好学习");
}
Student.prototype.eat=function(){
  console.log("海鲜过敏，不吃螃蟹")
}
var  stu  =new Student("李四",20);
stu.study();
stu.eat();
//重写  一定发生在具有继承关系的两个函数里面
//在子类中定义一个跟父类中方法同名的方法
stu.__proto__.__proto__.eat();

