/*
   continue：默认代表终止本次循环，执行下一次循环
 */
one:for(var  i=0;i<10;i++){
  if(i==5){
    continue one;
  }
  console.log(i);

}
