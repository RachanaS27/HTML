let arr = [55,44,33,22,11,66,77]

for(i=0;i<arr.length;i++){
    console.log(arr[i])
}

console.log("---------------")
//ES6 way of printing array

function f1(e){
    console.log(e)
}

function f2(e){
    console.log(e*e)
}

function f3(e){
    console.log(e*e*e)
}

arr.forEach(f1)
console.log("---------------")
arr.forEach(f2)
console.log("---------------")
arr.forEach(f3)
console.log("---------------")

arr.forEach(
    function (e){
    console.log(e*e*e*e)
})
console.log("---------------")

var arr1=[36,49,64,81]

arr1.forEach(
    function (e){
        console.log(Math.sqrt(e))
    }
)