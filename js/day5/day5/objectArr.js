var bj  ={
  name:"张三",
  age:20
}
var per={
  name:"李四",
  age:50     
}
//放到数组中
var  arr=[bj,per];
console.log(arr);
var   bj1 =arr[0];
console.log(bj1.name);
console.log(bj1.age); 
console.log("-----------------");
for(var  index in arr){
   var  val  = arr[index];
   console.log(val);//每一个数组中存贮的对象   
   for(var  prop  in val){
    var value=   val[prop];
    console.log(value);
   }

}




