function  callMe(fun,who){
	/*
	   fun  =function(who){
	     return  who;
	   }
	  fun(who)
	*/
    var  who  =fun(who);
	console.log(who);
	return  who;
}
/*
function  test(who){
   console.log(who+"callMe");
   return   who;
}*/

var  test = function(who){
   console.log(who+"callMe");
   return   who;
}
/*
var  who = test("刘能");
console.log(who);
*/
var  who  =callMe(test,"刘能")
console.log(who+"----");