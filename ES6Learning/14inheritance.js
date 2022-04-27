class Employee{
    constructor(n,a,b){
        this.name=n;
        this.age=a,
        this.basic=b;
    }

    computeAllowance(){
        return this.basic*0.35;
    }

    computeTotal(){
        return this.basic+this.computeAllowance();
    }

}

class Manager extends Employee{
    constructor(n,a,b,ec){
        super(n,a,b);
        this.employeeCount=ec;
    }

    printEmployeeCount(){
        console.log(this.employeeCount);
    }

    computeTotal(){
        return this.basic+this.computeAllowance()+(this.employeeCount*100);
    }
}

let m = new Manager("Rahul",27,60000.00,20)
console.log(m)
console.log(m.computeAllowance())
console.log(m.computeTotal())
m.printEmployeeCount()