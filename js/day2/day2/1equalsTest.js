/*
   ==:相等返回TRUE
   ！= ：两边不相等返回true
 
 */
// String 
var   a  ="ahello";
var  b  ="ahello";
var result = (a==b);
console.log(result);
//number 
//object  比较 的是内存地址
var  obj1 ={
   name:"张三"

}
var  obj2  ={
  name:"张三"
}
console.log(obj1);
console.log(obj2);
var  res  = (obj1==obj2);
console.log(res);
//   null   undefined
console.log("-----");
console.log(null==undefined);
console.log("-----------------");
//  其他数据类型和number
var  num1  =null;
var  num2 =undefined;
var  num3="10";
var  num4 =10/"a";
console.log(num1==10);//false
console.log(num2==10);//false
console.log(num3==10);//true
console.log(num4==10);//false
//其他数据类型（number） 跟String作对比
console.log("-------");
var   str ="true";
var   str1 =true;
console.log(str!=str1);
console.log("--------------");
var   str1 ="123";
var  str2=123;
console.log(str1===str2);
console.log(null === undefined);









