/**/
//var  reg =/ab\w?/ig;
//var  str ="helablo,hel,world";
var  reg=/a+?/ig;//{1,}
var  str  ="helaaaaahaa";
var  res  ;
while(res=reg.exec(str)){
  console.log(res);
}
