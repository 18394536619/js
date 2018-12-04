//null
var  num  = null;
var  result=parseInt(num);
console.log(result);
console.log("------");
var  num1  ;
var  result=parseInt(num1);
console.log(result);
console.log("------");

var  num2  =10/"a";
var  result=parseInt(num2);
console.log(result);
console.log("------");
//number 
var   num2 =10.25;
var result  =parseInt(num2);
console.log(result);
console.log("************");
//String  "" "ab" "ab12" "12ab" "123" "010" "0X10" "10e10" "10.01" "-10"

var   num2 ="ab";
var result  =parseInt(num2);
console.log("ab"+result);
console.log("------");
var   num2 ="ab12";
var result  =parseInt(num2);
console.log("ab12"+result);
console.log("------");
var   num2 ="12ab";
var result  =parseInt(num2);
console.log("12ab"+result);
console.log("------");

var   num2 ="";
var result  =parseInt(num2);
console.log("--"+result);
console.log("------");

var   num2 ="10.15";
var result  =parseInt(num2);
console.log("10.15"+result);
console.log("------");

var   num2 ="10e10";
var result  =parseInt(num2);
console.log("10e10"+result);
console.log("------");

var   num2 ="010";
var result  =parseInt(num2);
console.log("010"+result);
console.log("------");

var   num2 ="0X10";
var result  =parseInt(num2);
console.log("0X10"+result);
console.log("------");


var   num2 ="-10";
var result  =parseInt(num2);
console.log("-10"+result);
console.log("------");

console.log("测试parseFloat")
var num3  =10.15;
console.log(parseFloat(num3));
var num3  ="10.15ab";
console.log(parseFloat(num3));
