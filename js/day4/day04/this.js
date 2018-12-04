/*
  this
  我们可以使用函数中的属性调用方法
  参数1：想要让调用的那个方法中this指向
  哪个环境对象
  参数列表
  call(参数1,参数列表)
  apply（参数1，参数列表要求参数列表必须为数组类型）
*/
var  person={
  name:"张三",
  age :20,
  sayHello:function(a,b){
	  console.log(a)
	  console.log(b)
	  console.log(this);
	  console.log(this.name);
  }
}
var  dog={
  name:"旺旺",
  age:30,
  sayHello:function(){
    console.log(this);
	console.log(this.name);
  }
}
//person.sayHello();
//dog.sayHello();
//person.sayHello.call(dog);
//person.sayHello.apply(dog);
//dog.sayHello.call(person);
//person.sayHello.call(dog,10,20);

//person.sayHello.apply(dog,[10,32]);
var  a  =10;
function  test(){
   console.log(this);
   console.log(this.a)
}
 test.call(person,10,20);
 /*
    浏览器
	node
 */
 //window 

 test();//this  
