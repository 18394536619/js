//++在后  先使用  在做加法
var  a  =10;
console.log(a++);//10
console.log(a);//11
//++在前 先做加法在使用
var  b =10;
console.log(++b);//11
console.log(b);//11
var  c  =10;
var  res  =(c++)+10;

console.log(res);
console.log("--------------");
var  a =true;
var b  =+a;
console.log(b);//10
console.log(typeof  b);
console.log("--------------");
var  a  =10;
var b  =-(-a);
console.log(b);
console.log(typeof b);

var  a  ="12";
var b  =-(-a);//--Number(a)
console.log(b);
console.log(typeof b);
console.log("--------------");
var  a  =10;
console.log(Boolean(10));//true

var  b  =10;
console.log(!!b);//等级与Boolean(b);
console.log("------------");
    var a =true;
    var b  ="hello";
    var  result1  = a&&b;
    var  result2  = b&&a;
	console.log(result1);//hello
	console.log(result2);//true
console.log("------------");
	var a ="world";//true
	console.log(Boolean(a));
    var b  ="hello";
	console.log(Boolean(b))
	var  result1  = a&&b;//hello
    var  result2  = b&&a;//world
	console.log(result1);
	console.log(result2);

	console.log("----------");
	var  a  =false;
	var  b  ="hello";
	console.log(a&&b);//false

	var  numm  ;//Boolean(numm) false
	var  b  ="hello";
	console.log(numm&&b);//false
    console.log("----------");
     var  aa  =true;
	 var bb  =false;
	 console.log(aa||bb);//true
     console.log(bb||aa);//true

	 var aa1;
	 var aa2 ="hello";
     console.log(aa1||aa2);//hello
     console.log(aa2||aa1);//"hello" 


	 var aa1="world";
	 var aa2 ="hello";
     console.log(aa1||aa2);//world
     console.log(aa2||aa1);//"hello" 

	 console.log("----------");
	  var  a =10;
      var b  =20;
      var c  =a+b;//30
	  console.log(c);

       var  a  =true;
       var b  =false;
       var c  =a+b; //number
	   console.log(c);

	   var  a  =1/"a";
       var bbb;
       var c  =a+bbb; //number
	   console.log(c);

	









