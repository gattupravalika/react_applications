let arr=["JavaScripte is the world's most popula programming language"];
let arr2=[];
arr2=arr[0].split(" ");
console.log(arr2);
arr4=[]
arr2.forEach((data,index)=>{
    data.split("");
    if(data.charAt(data.length-1)=="a"||data.charAt(data.length-1)=="e"||data.charAt(data.length-1)=="i"||data.charAt(data.length-1)=="o"||data.charAt(data.length-1)=="u"){
        arr4.push(data+"/");
    }else{
        arr4.push(data+"-");
    }

});
console.log(arr4);