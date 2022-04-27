function f1(a,b){
    if(typeof b=="undefined") //this if can be replaced
        b=0;                  //by givivng 0 to parameters
    if(typeof a=="undefined") // see next function
        a=0;
    console.log(a+b)
}

f1(10,7)
f1(9)
f1()

function f2(a=0,b=0){    //default values is zero
    console.log(a+b)
}
f2(8)
f2()
f2(10,8)

function multiply(a=10,b=5,c=1){
    console.log(`multiplication ${a*b*c}`)
}

multiply(2,3,4)
multiply(2,3)
multiply(2)
multiply()

function divide(a=1,b=1){
    console.log(`division ${a/b}`);
}

divide(10,5)
divide(10)
divide()