//var  reg=/[a-z]+(\d+)/ig;
//var  str="abc123abcf8888";
var  reg=/[Jj]ava([Ss]cript)?\sis\s(fun\w*)/g;
var  str1="javascript is fun";
var  str2="javaScript  is  fun";
var  str3 ="java is funaa  ";
var  res ;
while(res =  reg.exec(str2)){
  console.log(res);
}
