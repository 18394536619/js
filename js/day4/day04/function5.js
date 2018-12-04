  var   add=function(a,b){
     var result  = a+b;
     return  result;
}
function  daiAdd(fun,num1,num2){
 var  res=  fun(num1,num2);
 console.log(res);//30
 return  res;
}
var  result  = daiAdd(add,50,80);
console.log(result);//30
var  result  =daiAdd(add,100,150);
console.log(result)

/*
var  result  =add(10,20);
console.log(result);*/