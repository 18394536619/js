function test(){
  var  num  =10;
  var  fun =function(){
    console.log("hello");
	return  "hello";
  }
  return  fun;
}
/*
 res =function(){console.log("hello")}
*/
var  res  =test();
console.log(res());
