function Person(name){
 this.name=name;
}
Person.prototype={
    say:function(){
	  console.log("hello")
	}
}
function  Student(name){
    this.name =name;
}
Student.prototype.eat=function(){
  console.log("吃饭");
}
Student.prototype=new Person("zhangsan",20);

Student.prototype.sleep=function(){
  console.log("睡觉");
}
var  pp  =new Student();
//pp.eat();
pp.sleep();



