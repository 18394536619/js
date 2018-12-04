/*
   使用Object构建对象
 */
var  sameDesk=new Object();
sameDesk.name="zhangsan";
sameDesk.age=20;
sameDesk.sex="男";
//添加一个方法
sameDesk.sayHello=function(){
  console.log("hello");
}
sameDesk.eat=function(){
  console.log("喜欢吃肉");
}
console.log(sameDesk);
//属性的获取
//方式一  通过对象.属性名/方法名()
var name =sameDesk.name;
var  age =sameDesk.age;
var  sec = sameDesk.sex;
console.log(name+"--"+age+"--"+sec);
//方式二  对象[属性名]  属性名为字符串类型
var   name1 ="name";
var  na  = sameDesk[name1];
var  ag =sameDesk["age"];

//调用方法
sameDesk.eat();
sameDesk.sayHello();


console.log(na+"----"+ag);




console.log("-------");


/*
   使用字面量的形式构建对象
 */
var  grilFriend={
  name:"hello  kity",
  age:18,
  sex:"女",
  sayHell:function(){
     console.log("hello");
  },
  eat:function(){
    console.log("喜欢吃肉");    
  }


}
console.log(grilFriend);







