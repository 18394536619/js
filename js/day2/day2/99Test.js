
for(var j=1;j<=9;j++){
    var  str ="";
    for(var i=1;i<=j;i++){
      if(i*j<10){
       str =str+(i+"*"+j+" = " +i*j+" "+" ");
   }else{
   
        str = str+(i+"*"+j+" =  "+i*j+" ");
   }
    //  console.log(str);
   }
    console.log(str);
}
