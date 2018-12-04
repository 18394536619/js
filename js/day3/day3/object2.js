/*
  构造器的形式构建对象
 */
var  dog=new Object();
dog.name="萨摩耶";
dog.age=7;
dog.eat=function(){
  console.log("吃骨头");
}
console.log(dog);
delete dog.name;
console.log(dog);
console.log("--------------");
var dog1={
  name:"雪纳瑞",
  age:8,
  eat:function(){
    console.log("喜欢吃零食");
  }  

}
console.log(dog1);
delete dog1.age;
console.log(dog1);


