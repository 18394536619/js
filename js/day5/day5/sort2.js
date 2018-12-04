var   arr =[5,8,2,9,3];
var  comp =function(a,b){
    if(a>b){
       return -1;
    }else if(a<b){
       return  1;
    }else{
       return  0;
    }
}
arr.sort(comp);
console.log(arr);
