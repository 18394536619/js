/*
   数组中是可以保存另外一个数组的地址
 */
var  arr=[10,80,"hello"];//内存存储 001
var  arr1=[80,78,true,"hello"];//002
var   home =[arr,arr1];
var father =home[0];
var son =home[1];
console.log(father);
console.log(son);
//father ==>[10,80,"hello"]
var num =father[0];
console.log("-------------------");
for(var  i=0;i<home.length;i++){
// [10，,8，"hello"]  []
  var arr =   home[i];
  for(var j =0;j<arr.length;j++){
   var  result  =    arr[j];
   console.log(result);
  }
}
console.log("----------------");
for(var  i=0;i<home.length;i++){
   for(var  j =0;j<home[i].length;j++){
     console.log(home[i][j])
   }
}









