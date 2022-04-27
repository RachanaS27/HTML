function Employee(a,b,c,d){
    this.id=a;
    this.name=b;
    this.grade=c;
    this.basic=d;

    this.computeAllowance=function(){
        switch(this.grade){
            case 'A':return 0.35*this.basic;
            case 'B':return 0.25*this.basic;
            case 'C':return 0.15*this.basic;
        }
    }

    this.computeTax=function(){
        return this.basic*0.10;
    }

    this.computeNetSalary=function(){
        return this.basic+this.computeAllowance()-this.computeTax();
    }
}