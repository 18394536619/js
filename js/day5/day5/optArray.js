/*
 
   通过数组下标操作数组

 */
//正常的操作
var  arr=[];
arr[0]="hello";
arr[1]="world";
arr[2]=true;
console.log(arr);
//往外取
var   one  =arr[0];
var three  =arr[2];
console.log(one);
console.log(three);
/*
   遍历数组
 */
for(var  i=0;i<arr.length;i++){
   var   num  =arr[i];
   console.log("下标为"+i+"对应的数值位"+num);
}
for(var index  in arr){
  //index为下标
    var  num  =arr[index];
    console.log("index:"+index+"value"+num);
}
var num =arr[10];
console.log(num);

/*判断数组*/
console.log(typeof arr);
console.log(Array.isArray(arr));
var  res  = arr.join("||");
console.log(res);
console.log(typeof  res);





