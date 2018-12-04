/*
 */
var arr=[10,20,99,88];
/*function test(obj,index,arr1){
  console.log(obj);
  console.log(index);
}
for(var  i =0;i<arr.length;i++){
   test(arr[i],i);
}*/
Array.prototype.myForEach=function(method){
   // console.log(this);
    for(var  i=0;i<this.length;i++){
      method(this[i],i,this);
    }
}
arr.myForEach(function(obj,index,arr1){
    console.log(obj)
    console.log(index);
    console.log(arr1);
        })

