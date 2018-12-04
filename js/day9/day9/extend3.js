//子类借用父类的构造器初始化子类中的属性
function Person(name,age){
	//this  window  
  this.name=name;
  this.age=age;
}
function Student(name,age,school){
	//this   新对象
  Person(name,age);
  //Person.call(this,name,age);
 /* this.name=name;
  this.age=age;*/
  this.school=school;
}

var p1 =new Student("zhangsan",20,"江西理工");
console.log(p1.name)
var p2 =new Student("lisi",20,"兰州理工")
console.log(p2.name)