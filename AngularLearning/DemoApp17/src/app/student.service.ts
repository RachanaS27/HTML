import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor() { }

  public students = []

    addStudent(student) {
        this.students.push(Object.assign({}, student))
        console.log(this.students)
    }
    getAllStudents() {
        return this.students;
    }

    findStudent(rollNo) {
        for (let i = 0; i < this.students.length; i++) {
            if (this.students[i].rollNo == rollNo) {
                return this.students[i];
            }
        }
    }

    deleteStudent(rollNo) {
        for (let i = 0; i < this.students.length; i++) {
            if (this.students[i].rollNo == rollNo) {
              this.students.splice(i, 1);
            }
        }
    }

    updateStudent(student) {
        for (let i = 0; i < this.students.length; i++) {
            if (this.students[i].rollNo == student.rollNo) {
              this.students[i] = student;
            }
        }
    }
}
