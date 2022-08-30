//can be declared any number of times with one variable name
var a=10; 
console.log(a);//10
var a=11;
console.log(a);
if(true){
    a=100
} 
console.log(a);//100
function myFunction1(){
    var a=12;
    console.log(a);
}
myFunction1();

console.log(a);

//can be declared only one time with one variable name
let b=10;
console.log(b);//10

if(true){
    b=100
} 
console.log(b);//10
function myFunction(){
    let b=12;
    console.log(b);
}
myFunction();//12
/**--------------------------------------------------------------------------------------- */

let arr=["abc","kdfj","dsjfh","dfdhj",545]
let temp=[]
arr.forEach((data,index)=>{
    temp.push(data);
})
console.log(temp);
