// access-modifiers
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// 1. public
var Employee = /** @class */ (function () {
    function Employee(name, age) {
        this.name = name;
        this.age = age;
    }
    Employee.prototype.modify = function (arg0) {
        throw new Error("Method not implemented.");
    };
    Employee.prototype.display = function () {
        throw new Error("Method not implemented.");
    };
    return Employee;
}());
var emp = new Employee("John", 24);
console.log(emp.name + "'s" + "age is " + emp.age);
emp.name = "Winston";
emp.age = 30;
console.log(emp.name + "'5" + "age is " + emp.age);
// 2. private
var Employeeone = /** @class */ (function () {
    function Employeeone(name, age) {
        this.name = name;
        this.age = age;
    }
    Employeeone.prototype.display = function () {
        console.log(this.age);
    };
    return Employeeone;
}());
var empone = new Employeeone("John", 30);
emp.display();
// 3. protected
var Employeetwo = /** @class */ (function () {
    function Employeetwo(name, age) {
        this.name = name;
        this.age = age;
    }
    return Employeetwo;
}());
var Manager = /** @class */ (function (_super) {
    __extends(Manager, _super);
    function Manager(name, age, designation) {
        var _this = _super.call(this, name, age) || this;
        _this.designation = designation;
        return _this;
    }
    Manager.prototype.display = function () {
        console.log(this.age);
    };
    Manager.prototype.modify = function (num) {
        this.age = num;
    };
    return Manager;
}(Employeetwo));
var emptwo = new Manager("Winston", 45, "Manager");
emp.display();
emp.modify(90);
emp.display();
