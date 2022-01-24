class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.fullName = firstName + " " + lastName;
    }
}
class Employee extends Person {
    constructor(firstName, lastName, id, department) {
        super(firstName, lastName);
        this.firstName = firstName;
        this.lastName = lastName;
        this.id = id;
        this.department = department;
        this.id = id;
        this.department = department;
    }
    showDetails() {
        console.log("Employee name is : " + this.fullName);
        console.log("Employee id number is : " + this.id);
        console.log("Department employee works is : " + this.department);
    }
}
var emp = new Employee("Puneet", "Vashisht", 1225, "IT");
emp.showDetails();
