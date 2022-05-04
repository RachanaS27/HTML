function EmployeeManagement() {
  this.employees = [];

  this.addEmployee = function (e) {
    this.employees.push(e);
    console.log(this.employees);
  };

  this.removeEmployee = function (removeId) {
    for (i = 0; i < this.employees.length; i++) {
      if (this.employees[i].id == removeId) {
        this.employees.splice(i, 1);
        break;
      }
    }
    console.log(this.employees);
  };


  this.getAllEmployees=function(){
      return this.employees;
  }
}
