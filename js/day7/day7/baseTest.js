var  a  =10;//基本数据类型
var  b  = new Number(10);
var  bol  = new Boolean();
var  str  =new String("ab");
var  str1 ="hello";
b++;
console.log(b);

console.log(a==b);
console.log(a===b);
//所有的基本数据类型都有一个与之对应的包装器类型
//包装器类型会在特定的时候进行拆箱和装箱的操作
// 自动将基本数据类型--->引用数据类型 装箱
//把一个引用数据类型--->基本数据类型  拆箱
var  result =a.toString();
var  res1=a.valueOf();
var  res2=a.constructor;
console.log(result)
console.log(res1);
console.log(res2);
