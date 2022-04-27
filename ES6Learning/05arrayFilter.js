let arr1 = [20, 17, 55, 61, 34, 78];

function f1(e) {
    if (e >= 50) {
        return true;
    } else {
        return false;
    }
}

var resArr1 = arr1.filter(f1);

console.log(arr1);
console.log(resArr1);

var resArr2 = arr1.filter(function (e) {
    if (e > 30) return true;
    return false;
});

console.log(arr1);
console.log(resArr2);

var mynumbers = [2,7,12,13,15,17,21,23,29]

var resArr3 = mynumbers.filter(
    function(e){
        if(e==0||e==1){
            return false
        }else{
            for(i=2;i<e;i++){
                if(e%i==0){
                    return false
                }
            }
            return true
        }

    }
)


console.log(mynumbers);
console.log(resArr3);


var myNames=["Varun","Vincy Thomas","Kevin","Mathews","John"]

var resArr4 = myNames.filter(
    function(e){
        if(e.length>6){
            return true
        }
        return false
    }
)
console.log(myNames);
console.log(resArr4);