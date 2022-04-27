let numbers = [60.0,70.0,80.0,90.0];
let cities = ["Mumbai","Delhi","Pune",...numbers,"Kolkata"];

console.log(cities)

function multiply(i=1,j=1,k=1){
    console.log(`multiplication result is ${i*j*k}`)
}

let marks=[34,41,50,60];
let m1 = [2,2,2,2]
multiply(...marks)
multiply(...numbers)
multiply(...m1)
console.log("--------")

let arr1=["welcome","hello","world"]
let arr2=[...arr1]

console.log(arr2)
console.log("-----------")


print("Country","India","Britian","USA","Spain","France");

function print(prefix,...elements){
    elements.forEach(
        function(e){
            console.log(prefix+" : "+e)
        }
    );
}

print("Marks",90,95,92)