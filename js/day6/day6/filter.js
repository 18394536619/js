/*
   filter:将满足条件的数组中的对象生成一个新的数组返回
 */
var  obj1 ={
  name:"lisi",
  age:20
};
var obj2 ={
 name:"赵六",
 age:13
}
var  obj3 ={
   name:"谢广坤",
   age:15     
}
var  arr=[obj1,obj2,obj3];
var   result =arr.filter(function(obj){
  return  obj.age<=18;        
});
console.log(result);
result.forEach(function(obj,index){
        console.log(obj);
        console.log(index);
        
})    







