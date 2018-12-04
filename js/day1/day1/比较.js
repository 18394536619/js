var   a =10;
var  b  =20;
console.log(a>b);//false
var   a =10;
var  b  ="20";
console.log(a>b);//false

var   a ="abc";//97  98  99
var  b  ="acc";// 97 99 99
console.log(a>b);//false

var  a  ="abc";
var b =10/"a";
console.log(a>b);//false