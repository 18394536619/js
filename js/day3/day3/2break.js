/*
    break  代表终止当前循环
 */
/*
for(var  i=0;i<10;i++){
   if(i==5){
      break;
   }
   console.log(i);//1---4
}*/

one:for(var  i=0;i<10;i++){
two: for(var j=0;j<=10;j++){
     if(j==5){
       break one;
     }
     console.log(i+"--"+j);
   }
 
}










