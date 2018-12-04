/**/
//var   reg=/abc/ig;//匹配字符串abc
//var  reg =/[abc]/ig;//声明在[]中的字符串都可以匹配
//var
//reg=/[^abc]/ig;//除了[]内部的字符串之外的其他字符被匹配

//var  reg =/./ig;

//var  reg =/\w/ig;//代表任意一个[a-zA-Z0-9]
//var   reg=/\W/ig;//代表除了【a-zA-Z0-9】
var  reg =/\s/ig;
var  str ="a12?! a  hbhck;";

var res  ;
while(res=reg.exec(str)){
  console.log(res);
}
