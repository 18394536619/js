//name属于对象自己所有  kaiche属于大家公有
//同时统计一共创建了多少对象
function  Person(name){
  this.name=name;
  Person.prototype.count++;
  //this.count=1;
}
Person.prototype.kaiCar=function(){
  console.log("开车");
}
Person.prototype.count=0;
var  xx1  =new Person("lisi");
var  xx2  =new Person("lisi");
var  xx  =new Person("lisi");
var  xx  =new Person("lisi");
console.log(xx.count);