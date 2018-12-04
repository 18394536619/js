function  test(a,b,c){
  console.log(a,b,c);
}
var  len  = test.length;
console.log(len);
test(10,20,30);
//apply  call
console.log("---------");
console.log(typeof test)
var  num  = test.prototype;
console.log(num);
