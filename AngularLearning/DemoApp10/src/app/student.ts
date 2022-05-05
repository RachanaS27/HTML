export class Student {
    constructor(
        public rollNo:number,
        public name:string,
        public mark1:number,
        public mark2:number,
        public mark3:number,

    ){

    }

    computeTotal(){
        return this.mark1+this.mark2+this.mark3;
    }
}
