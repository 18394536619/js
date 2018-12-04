//\  \.
var  reg=/http(s)?:\/\/\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}:\d{1,4}/ig;
var  str  ="http://192.16.1.103:8888/login.html?name=zhangsan";
//http://192.16.1.103
console.log(reg.test(str));