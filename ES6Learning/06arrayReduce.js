let arr1=[2,5,2,5]

function f1(a,b){
    return a+b;
}

var result1=arr1.reduce(f1)
console.log(result1)

let arr2 = [100,200,300,400]

var result2=arr2.reduce(f1)
console.log(result2)

var arr3 = [6,2,1,4,80,9]

function f2(a,b){
    if(a>b)
        return a;
    else
        return b;
}

var result3 = arr3.reduce(f2);
console.log(result3)

function f3(a,b){
    if(a<b)
        return a;
    else
        return b;
}

var result4 = arr3.reduce(f3);
console.log(result4)

var names = ["John David","Rahul","Pooja","Uma","Devi"]
var book = ["aa","bb","cc","dd"]
var result5 = names.reduce(
    function(a,b){
        return a+b
    }
)
console.log(result5.length)

var result6 = book.reduce(
    function(a,b){
        return a+b
    }
)
console.log(result6.length)

let emps=[
    {
        "id":101,
        "name":"Abi",
        "salary":65000
    },
    {
        "id":102,
        "name":"Pooja",
        "salary":50000
    },    {
        "id":103,
        "name":"Divya",
        "salary":70000
    },    {
        "id":104,
        "name":"Anuradha Ganesh",
        "salary":60000
    },
]

var result7 = emps.reduce(
function(a,b){
    if(a.salary>b.salary)
        return a;
    else
        return b;
})

console.log(result7)

var result8 = emps.reduce(
    function(a,b){
        if(a.salary<b.salary)
            return a;
        else
            return b;
})

console.log(result8)

console.log("--------")
var result9 = emps.reduce(
    function(a,b){
        if(a.name.length<b.name.length)
            return a;
        else
            return b;
})

console.log(result9)
