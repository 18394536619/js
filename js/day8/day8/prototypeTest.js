function Person(name){
   this.name=name;
   this.fun=function(){
     console.log("hello");
   }
}
Person.say=function(){
  console.log("say");
}
var  pp= new Person("zhangsan");
//pp.fun();
//pp.say();
//Person.say();
/*
var  pro  =Person.prototype;
console.log(pro);
console.log(typeof pro);
*/
var  fun  = pp.constructor;
console.log(fun);
console.log(typeof fun);
console.log(Person == fun);
//pp.say();
fun.say();














