function f1(){
    console.log("f1")
}

var f2=function(){
    console.log("f1")
}
var f3=()=>{
    console.log("welcome to Arrow function")
}
f3();

var square = (a)=>{
    console.log(a*a)
}
square(5)

var cube = (a)=>{
    return a*a*a;
}
console.log(cube(5));

var cube1 = (a)=>a*a*a;
console.log(cube1(5));

var arr = [5,6,7,8,9,10]

arr.forEach(
    (e)=>console.log(e)
)

var result=arr.map(
    (e)=>e*e
)
console.log(result)

var arr1=[15,16,27,38,29,10]

var result=arr1.reduce(
    (a,b)=>(a<b)?a:b
)
console.log(result)

var result = arr1.reduce(
    (a,b)=>a+b
)
console.log(result)
