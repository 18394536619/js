/*
  js中没有方法重载的概念
  方法名相同的方法视为同一个方法
*/
function   test(){
  console.log("heool");
}
function test(a,b){
 //内置对象
 // console.log(a,b);	 
  //console.log("world");
  //类数组  具备数组的特性  
  console.log(arguments)
  for(var  index  in  arguments){
     console.log(index);
	 console.log(arguments[index]);
  }
}

test(10,20,30,40);