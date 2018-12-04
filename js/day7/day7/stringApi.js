var  str="hello world";
//检查字符串的长度
var  res  = str.length;//11
console.log(res);
//获取某个位置的字符  从0开始
var res  =str.charAt(0);
console.log(res);
//给定字符编码
var  res  =str.charCodeAt(0);
console.log(res);
//查找字符的位置
var res =str.lastIndexOf(" ");
console.log(res);
//截取字符串
console.log("-------");
var  str1="hello17894";
var res1 =str1.slice(2,5);
console.log(res1);//11o
var  res2 =str1.substr(2,5);
console.log(res2);//llo17
var  res3 =str1.substring(2,5);//llo
console.log(res3);
console.log("-------------");
var  str =" hello ";
var  res = str.trim();
console.log(res,str==res);
console.log("---------");
//字母
var  str ="hello";
var  res  = str.toUpperCase();
console.log(res);

