var   obj={
  name:"张三",
  age:20
}
//属性设置obj
//三个参数  第一个参数代表设置的是哪个对象
//第二个参数：需要设置的属性
//如何设置
/*Object.defineProperty(obj,"weight",{
  configurable:true,
  enumerable:false,
  wriable:false,
  value:"100kg"
});*/
Object.defineProperties(obj,{
     weight:{
	 configurable:true,
     enumerable:false,
     wriable:false,
	 value:"80"
	 },
	age:{
	configurable:true,
    enumerable:false,
    wriable:true,
	value:22
	 }
});
console.log(obj);
for(var  key in  obj){
  console.log(key+"--"+obj[key]);
}
console.log(obj.weight)
obj.weight="150kg";
console.log(obj.weight);
console.log(obj.age)
console.log("------------");
//查看某个对象属性如何进行设置
var res =
Object.getOwnPropertyDescriptor(obj,"age");
console.log(res);
