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

let e1 = new Employee("Rahul",27,60000.00)
console.log(e1)
console.log(e1.computeAllowance())
console.log(e1.computeTotal())

class Student{
    constructor(a,b,c,d,e){
        this.rollNum=a;
        this.name=b;
        this.mark1=c;
        this.mark2=d;
        this.mark3=e;
    }

    computeTotal(){
        return this.mark1+this.mark2+this.mark3;
    }

    computeAverage(){
        return this.computeTotal()/3;
    }

    computeGrade(){
        let average=this.computeAverage();
        if(average>=90){
            return 'A';
        }else if(average>=80){
            return 'B';
        }else if(average>=70){
            return 'C';
        }else if(average>=50){
            return 'D';
        }else{
            return 'Fail'
        }
    }
}

let stud = new Student(101,"Divya",80,85,80);
console.log("-----------")
console.log(stud.computeTotal());
console.log(stud.computeAverage());
console.log(stud.computeGrade());
