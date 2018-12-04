//构造器+原型
function  Person(name){
   this.name=name;
}
//方法太多了
//Person.prototype.sayName=function(){}//{}
Person.prototype={
   constructor:Person,
   sayName:function(){
     console.log("hello");
   },
   eat:function(){
     console.log("吃饭");
   }
};
var   pp  =new Person("李四");
var   pp1  =new Person("王五");
pp.eat();
pp1.eat();
var  xx  = pp.constructor;
console.log(xx);
console.log(Person ==  xx);









