/*with*/
var  person={
  name:"张三",
  age:    20,
  sex:"男" 
}
console.log(person.name);
with(person){

  console.log(name);
  console.log(age);
  console.log(sex);
}
