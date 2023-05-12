//multiplication table
let x = 15;
let a = 4;
for(let i=1;i<=x;i++){
    console.log( i +"*"+ x+"="+ i*a);
}
//finding square

let num = [1,3,9,12,15,18,21];
for(let i=0;i<num.length;i++){
    console.log("square of "+num[i]+ " is " +num[i]**2);
}
//check grade according to mark,
let mark = 64;
if(mark>90){
    console.log("your grade is A");
}else if(mark>70){
    console.log("your grade is B");
}else if(mark>50){
    console.log("your grade is C");
}else if(mark>30){
    console.log("your grade is D");
}else{
    console.log("your grade is E");
}