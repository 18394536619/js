//for in  可以用来遍历一个对象中的属性

var  per={
  name:"如画",
  age:20,
  sex:"男"  
}
// per.属性名/方法  per[属性名]
/* var   str  = per.name;
 var  str1 =per["name"];
 console.log(str);
 console.log(str1);*/
for(var  prop  in  per){
   //  for每次循环的时候将per对象中的属性名取出来交给prop
    console.log(prop);
//    var  value=   per.prop;
    var value=per[prop];
    console.log(value)
}
console.log("----------------------");
//for in 遍历一个数组
var str =[1,10,5,88];

var  num1=str[0];
var num2  =str[1];
console.log(num1+"--"+num2);
for(var  key  in   str){
  console.log("下标"+key);
  console.log("value"+str[key]);
 }
