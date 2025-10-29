class Employee {
    constructor(){
        this.baseFullTimeEmployee = 5000000;
        this.basePartTimeEmployee = 50000;
    }
}

class FullTimeEmployee extends Employee {
    calculatedSalary() {
        return console.log(`gaji anda adalah ${this.baseFullTimeEmployee}`);
    } 
}

class PartTimeEmployee extends Employee {
    calculatedSalary(workingHours) {
        let totalSalary = this.basePartTimeEmployee * workingHours
        return console.log(`${this.basePartTimeEmployee} x ${workingHours} = ${totalSalary}`);
    }
}

const partTimeSalary = new PartTimeEmployee();
partTimeSalary.calculatedSalary(3);

const fullTimeSalary = new FullTimeEmployee();
fullTimeSalary.calculatedSalary();