var arr = [2,3,4,5];

function f1(e){
    return e*e
}

var resarr=arr.map(f1)

console.log(arr)
console.log(resarr)

var arr1 = [36,49,64,81,100]

var resarr1 = arr1.map(
    function(e){
        return Math.sqrt(e)
    }
)
console.log("----------")
console.log(arr1)
console.log(resarr1)

var arr2 = [4,6,7,8,9]

var resarr2 = arr2.map(
    function(e){
        fact=1;
        for(i=1;i<=e;i++){
            fact=fact*i;
        }
        return fact;
    }
)

console.log(arr2)
console.log(resarr2)

var names=["John","Daniel","Jancy","Vincy"]

var cap = names.map(
    function(e){
        return e.toUpperCase();
    }
)

console.log(names)
console.log(cap)