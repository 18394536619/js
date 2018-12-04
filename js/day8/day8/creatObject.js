/*
  采用工厂模式去构建一个对象
*/
/*function  createPerson(name,age,id){
	 var  obj  = new Object();
	 obj.name=name;
	 obj.age=age;
	 obj.id=id;
	 obj.eat=function(something){
	   console.log("吃饭吃"+something);
	 }
	 return  obj;
}*/
var   eat =function(something){
  console.log(something);
}
function  createPerson(name,age,id){
    var obj = new  Object();
	obj.name=name;
	obj.age=age;
	obj.id=id;
	obj.eat=eat;
	return   obj;
}
function  createDog(){
  var  xx  =new Object();
}

//构建一个人
var per1 =createPerson("张三",20,"1001");
per1.eat("牛肉");
var per2 =createPerson("lisi",21,"1002");
per2.eat("羊肉");
console.log(per1.eat ==  per2.eat);
console.log(typeof per1);
console.log(typeof per2);
console.log(per1 instanceof Object);