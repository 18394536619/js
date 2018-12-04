/*
  splice:两个参数代表删除
  参数1：位置
  参数2：删除个数
 
 */
var  arr  =[10,7,8,9,56];
//var  delArr = arr.splice(1,2);
//var  delArr = arr.splice(2,0,"e",78);
var delArr  =arr.splice(2,2,"e",99);
console.log(arr);
console.log(delArr);    
