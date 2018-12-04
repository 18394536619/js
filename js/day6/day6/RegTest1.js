/*var   reg =/abc/ig;
console.log(reg);
//测试一个字符中是不是包含reg所声明的字符串
var result =reg.test("abeg hello ab");
console.log(result);
*/

var  reg  =/abc/ig;
var  str ="abc  ab  abc helloabc";
//类数组对象 数组
var  result =reg.exec(str);
console.log(result);