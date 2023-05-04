var Employee = /** @class */ (function () {
    function Employee(n, a) {
        this.name = n;
        this.age = a;
    }
    return Employee;
}());
var emp = new Employee("John", 24); // object emp instanciated of type Employee and hence consumed some space in the memory
console.log(emp.name); // accessed the property 'name' of the object emp of type Employee
console.log(emp.age);
