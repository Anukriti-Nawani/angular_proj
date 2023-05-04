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
var Manager = /** @class */ (function () {
    function Manager(firstName, lastName, salary, email) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.salary = salary;
    }
    return Manager;
}());
//Derived class
var AreaManager = /** @class */ (function (_super) {
    __extends(AreaManager, _super);
    function AreaManager(firstName, lastName, salary, email, area) {
        var _this = _super.call(this, firstName, lastName, salary, email) || this;
        _this.area = area;
        return _this;
    }
    return AreaManager;
}(Manager));
var manager = new Manager("John", "Doe", 25000, "john@xyz.com");
var areaManager = new AreaManager("Chun", "Li", 35000, "chun@xyz.com", "Los Angeles");
console.log("Manager's name: ".concat(manager.firstName, " ").concat(manager.lastName));
console.log("Manager's salary: ".concat(manager.salary));
console.log("Area Manager's name: ".concat(areaManager.firstName, " ").concat(areaManager.lastName));
console.log("Area Manager's salary: ".concat(areaManager.salary));
console.log("Area Manager's area of duty: ".concat(areaManager.area));
var Animal = /** @class */ (function () {
    function Animal(theName) {
        this.name = theName;
    }
    Animal.prototype.move = function (distanceInMeters) {
        if (distanceInMeters === void 0) { distanceInMeters = 0; }
        console.log("".concat(this.name, " moved ").concat(distanceInMeters, "m."));
    };
    return Animal;
}());
var Snake = /** @class */ (function (_super) {
    __extends(Snake, _super);
    function Snake(name) {
        return _super.call(this, name) || this;
    }
    Snake.prototype.move = function (distanceInMeters) {
        if (distanceInMeters === void 0) { distanceInMeters = 5; }
        console.log("Slithering...");
        _super.prototype.move.call(this, distanceInMeters);
    };
    return Snake;
}(Animal));
var Horse = /** @class */ (function (_super) {
    __extends(Horse, _super);
    function Horse(name) {
        return _super.call(this, name) || this;
    }
    Horse.prototype.move = function (distanceInMeters) {
        if (distanceInMeters === void 0) { distanceInMeters = 45; }
        console.log("Galloping...");
        _super.prototype.move.call(this, distanceInMeters);
    };
    return Horse;
}(Animal));
var sam = new Snake("Sammy the Python");
var tom = new Horse("Tommy the Palomino");
sam.move();
tom.move(34);
