var myName = "Rachana"
var myCity = "Bangalore"

console.log("my name is "+myName+", my city is "+myCity);

//ES6 template string literals

console.log(`my name is ${myName}, my city is ${myCity}`)

let emp={
    "id":1221,
    "name":"Ravi",
    "salary":40000.00,

    print:function(){
        let str = `Employee id = ${this.id}, Employee Name = ${this.name}, Employee salary = ${this.salary} `;
        console.log(str)
    }
}
emp.print();