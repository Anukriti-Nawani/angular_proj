//  abstraction
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
//  1. using abstract class
var Children = /** @class */ (function () {
    function Children(name) {
        this.name = name;
    }
    Children.prototype.display = function () {
        console.log(this.name);
    };
    return Children;
}());
var Student = /** @class */ (function (_super) {
    __extends(Student, _super);
    function Student(name, rollNo) {
        var _this = _super.call(this, name) || this;
        _this.rollNo = rollNo;
        return _this;
    }
    Student.prototype.find = function (rollNo) {
        /*
        *
        *
        perfom db query to find
        a student of the specific rollNo
        let the student be Luigi with roll no 101
        *
        *
        */
        var roll = 101;
        var name = "Luigi";
        return new Student(name, roll);
    };
    return Student;
}(Children));
var emp = new Student("John", 100);
emp.display();
var emp2 = emp.find(101);
emp2.display();
var Employee = /** @class */ (function () {
    function Employee(name, email, employeeId) {
        this.name = name;
        this.email = email;
        this.employeeId = employeeId;
    }
    return Employee;
}());
