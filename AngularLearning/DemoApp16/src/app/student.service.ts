import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor() { }

  public students=[]

  addStudent(student){
    this.students.push(student);
    console.log(this.students)
  }

  deleteStudent(rollNo){
    for(let i=0;i<this.students.length;i++){
      if(this.students[i].rollNo==rollNo){
        this.students.splice(i,1);
        console.log(this.students);
      }
    }
   
  }

  getAllStudents(){
    return this.students;
  }

  findStudent(rollNo){
    for(let i=0;i<this.students.length;i++){
      if(this.students[i].rollNo==rollNo){
        console.log(this.students[i]);
        return this.students[i];
      }
    }
  }

  updateStudent(student){
    for(let i=0;i<this.students.length;i++){
      if(this.students[i].rollNo==student.rollNo){
        this.students[i]=student;
        console.log(this.students[i])
      }
    }

  }


}
