function  test(){
   //把所有数据打印出来
   var  length = arguments.length;
   for(var  i=0;i<length;i++){
     var value  =arguments[i];
	 console.log(value);
   }
}
//test(1,2,3,4)

//计算5的阶乘  5*4*3*2*1
/*function  sum(num){
  var  sum  =1;
  for(var  i=1;i<=num;i++){
    sum  =sum*i
  }
	console.log(sum)
}
sum(8)*/
function  sum8(num){
   if(num<=1){
     return 1;
   }else{
     return  num*arguments.callee(num-1);
   }
}
var  value  =sum8(8);
console.log(value);