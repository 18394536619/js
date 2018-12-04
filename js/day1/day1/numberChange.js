//NAN---number
var num = 10/"a";
var res  = Number(num);
console.log(res);
console.log(typeof res);
console.log("---------");
//null 
var num = null;
var res  = Number(num);
console.log(res);
console.log(typeof res);
console.log("---------");
//undefined 
var num1 ;
console.log(num1);
var res1  = Number(num1);
console.log(res1);
console.log(typeof res1);
console.log("---------");
//number 10 10.0 10.11
var num2 =10.15 ;
var res1  = Number(num2);
console.log(res1);
console.log(typeof res1);

console.log("***********");
var num2 =011 ;//八进制 
var res1  = Number(num2);
console.log(res1);
console.log(typeof res1);
console.log("************");


console.log("***********---");
var num2 =0X10 ;//16进制 
var res1  = Number(num2);
console.log(res1);
console.log(typeof res1);
console.log("************---");

console.log("***********---");
var num2 =1e5 ;//
var res1  = Number(num2);
console.log(res1);
console.log(typeof res1);
console.log("************---");
//null
var num2 ="";
var res1  = Number(num2);
console.log(res1);
console.log(typeof res1);
console.log("---------");

//String  "abc" "abc12"  "12abc"
var num2 ="abc";
var res1  = Number(num2);
console.log(res1);
console.log(typeof res1);
console.log("---------");

var num2 ="abc12";
var res1  = Number(num2);
console.log(res1);
console.log(typeof res1);
console.log("---------");


var num2 ="12abc";
var res1  = Number(num2);
console.log(res1);
console.log(typeof res1);
console.log("&&&&&&&&&&&&&");
// ""--->0
//"10"
var num2 ="10";
var res1  = Number(num2);
console.log(res1);
console.log(typeof res1);
console.log("---------");
var num2 ="010";//8进制  
var res1  = Number(num2);
console.log(res1);
console.log(typeof res1);
console.log("---------");
var num2 ="0X10";//16进制
var res1  = Number(num2);
console.log(res1);
console.log(typeof res1);
console.log("---------");

var num2 ="10e10";//16进制
var res1  = Number(num2);
console.log(res1);
console.log(typeof res1);
console.log("---------");

var num2 ="10.10";//16进制
var res1  = Number(num2);
console.log(res1);
console.log(typeof res1);
console.log("---------");

var num2 ="-10";//16进制
var res1  = Number(num2);
console.log(res1);
console.log(typeof res1);
console.log("---------");




//Object 