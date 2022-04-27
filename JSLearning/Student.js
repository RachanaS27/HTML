function Student(a,b,c,d,e){
    this.roolNum=a;
    this.name=b;
    this.mark1=c;
    this.mark2=d;
    this.mark3=e;


    this.computeTotal=function(){
        return this.mark1+this.mark2+this.mark3;
    }

    this.computeAverage=function(){
        return ((this.mark1+this.mark2+this.mark3)/3);
    }

    this.computeGrade=function(){
        var total=this.computeAverage();
        if(total>=90 && total<=100){
            return "A";
        }else if(total>=70 && total<90){
            return "B";
        }else if(total>=50 && total<70){
            return "C";
        }else{
            return "D";
        }
    }
}