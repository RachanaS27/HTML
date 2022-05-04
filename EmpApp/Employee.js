var globalEmpid = 0;

function Employee(n, g, b) {
  this.id = ++globalEmpid;
  this.name = n;
  this.grade = g;
  this.basic = b;

  this.computeAllowance = function () {
    if (this.grade == "A") {
      return this.basic * 0.35;
    }
    if (this.grade == "B") {
      return this.basic * 25;
    }
    if (this.grade == "C") {
      return this.basic * 15;
    }
  };

  this.computeNet = function () {
    return this.basic + this.computeAllowance();
  };
}
