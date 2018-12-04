//两个数据如果是非Object非NAN非String这是
//数据会使用Number（）装换成数字进行加法

  console.log("----------");
	  var  a =10;
      var b  =20;
      var c  =a+b;//30
	  console.log(c);

       var  a  =true;
       var b  =false;
       var c  =a+b; //number
	   console.log(c);


//如果两边数据一边为String 这是另外一个数
//会被转换成String然后进行字符串的拼接
var  a ="hello";
var  b =10;
var c =11;
var  res  =a+b+c;//hello1011
var  res1  =b+c+a;//21hello
var  res2  =b+a+c;//10hello11

 console.log("----------");
	   //先理解 当一方出现对象
	   var a={name:"张三"

	   };//Object  toString  valueOf

	   console.log(a);

	   var b  =10;
	   var  sss= a+b;
	   console.log(sss);
	   console.log(typeof sss);
//当一方出现NAN的时候+ 一般都是NAN
console.log("--------------")

var  num1  =10;
var num2  =10/"a";
var  rrr = num1+num2;
console.log(rrr);
console.log(typeof  rrr);//NAN---Number 

var  num1  ="10";
var num2  =10/"a";
console.log(String(num2))
var  rrr = num1+num2;
console.log(rrr);
console.log(typeof  rrr);
