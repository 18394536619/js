/*
  构造器的形式构建一个对象
*/
//声明一个构造器
var  eat =function(){
  console.log("eat");
}
function Person(name,age,id){
  //this  如果使用new调用Person this就是新创建的对象
  this.name=name;
  this.age=age;
  this.id=id;
  this.eat=eat;
}
function  Dog(name,age){
 this.name=name;
 this.age=age;
}
/*
var  persor  = new Person("张三",20,"001");
var  dog  = new Dog("旺旺",7);
console.log(typeof persor);
console.log(typeof dog);
console.log(persor instanceof Person);
console.log(persor  instanceof Dog);
console.log(persor instanceof Object);
*/
new Person("zhangsan",20,"1001");