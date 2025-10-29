class Employee{
    constructor() {
        this.baseFullTimeSalary = 5000000;
        this.basePartTimeSalary = 50000;
        
    }
    calculatedSalary() {
       return console.log(`${this.gaji}`);
    }
}

class FullTimeEmployee extends Employee{
    calculatedSalary() {
        return console.log(`gaji anda adalah ${this.baseFullTimeSalary}`);
    }
}

class PartTimeEmployee extends Employee{
    calculatedSalary(workingHours) {
        let totalSalary = workingHours * this.basePartTimeSalary;
        return console.log(`${this.basePartTimeSalary} x ${workingHours} = ${totalSalary}`);
    }
}

let salary = new FullTimeEmployee();
salary.calculatedSalary();

let partSalary = new PartTimeEmployee();
partSalary.calculatedSalary(3);