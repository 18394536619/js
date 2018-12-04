/*
     常用方法的使用
 */
var  arr  =[10,2,90,89];
var arrNew = arr.concat(80,77);
console.log(arr);
console.log(arrNew);    
//slice([],[])  左闭合右开放 从数组小标的某个位置截取新的数组返回
//如果是一个参数代表从数组的那个位置开始截取，一直截取到末尾
//如果是两个参数，第一个参数代表从哪里开始
//第二个参数代表到哪里结束
var  newA=arr.slice(1,2);
console.log(arr);
console.log(newA);

