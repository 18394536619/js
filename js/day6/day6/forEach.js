/*
   var   method =function(obj,index,arr){}
   arr.forEach(method);

   arr.forEach(function(obj,index){})
 
 */
var  arr=[10,80,90,78,99];
for(var  i=0;i<arr.length;i++){
  console.log(arr[i]);
}
console.log("-------------");
arr.forEach(function(obj,index,arr1){
  console.log("&&&");
  console.log(obj);
  console.log(index);
  console.log(arr1);  
});





