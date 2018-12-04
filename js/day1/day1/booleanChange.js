/*
   其他数据类型---往boolean类型装换
*/
//number --->boolean  非0   0  负数  小数
var  a  =10;
var  result = Boolean(a);
console.log(result);
console.log(typeof result);
console.log("-------------")
var  b  =-10;
var  result1 = Boolean(b);
console.log(result1);
console.log(typeof result1);
console.log("-------------")
var  c  =10.5;
var  result2 = Boolean(c);
console.log(result2);
console.log(typeof result2);
console.log("-------------")
var  d  =0;
var  result3 = Boolean(d);
console.log(result3);
console.log(typeof result3);
//null---Boolean
console.log("-------------")
var  f  =null;
var  result4 = Boolean(f);
console.log(result4);
console.log(typeof result4);
console.log("-------------")
var  g ;
var  result5 = Boolean(g);
console.log(result5);
console.log(typeof result5);

//NAN---Boolean
console.log("-------------")
var  h =10/"a";
console.log(h);
var  result6 = Boolean(h);
console.log(result6);
console.log(typeof result6);
//String --  "hello" ""  " "

var  a1="hello"
var  res = Boolean(a1);
console.log(res);
console.log(typeof res);

var  a2=" ";
var  res2 = Boolean(a2);
console.log(res2);
console.log(typeof res2);
//Object ---》
var  obj  ={name:"张三"};
console.log(Boolean(obj))






