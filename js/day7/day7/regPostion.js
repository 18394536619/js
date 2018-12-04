var  reg =/^(abc)hello$/ig;
var  str ="cabchello";
var  res ;
while(res=reg.exec(str)){
 console.log(res);
}
