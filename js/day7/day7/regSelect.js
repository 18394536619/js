/*var  reg =/ab|cd|ef/ig;//[abc]
var str ="abhelabh2cd1ef1";
var  res  ;
console.log(reg.exec(str))
console.log(reg.exec(str));
console.log(reg.exec(str));
*/
var   reg =/[jJ]ava(script)?/ig;
var  str ="javaHelJavajavascript";
var res;
while(res =reg.exec(str)){
  console.log(res);
}
