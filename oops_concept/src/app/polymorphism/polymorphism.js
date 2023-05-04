// polymorphism
// method overloading
// method overriding
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
//  1. method overloading
var Example = /** @class */ (function () {
    function Example() {
    }
    /**
    function definition
    **/
    Example.prototype.add = function (a, b) {
        return a + b;
    };
    return Example;
}());
var object = new Example();
/**
print to console
**/
console.log(object.add("Hello ", "John"));
console.log(object.add(1, 1));
//Now let’s try providing different number of parameters:
//   class Example{
//     mult(a: number, b:number){
//       return a*b;
//     }
//     mult(a:number, b:number, c:number){
//       return a*b*c;
//     }
//   }
//  2 .method overriding
var Laptop = /** @class */ (function () {
    function Laptop() {
    }
    Laptop.prototype.getOS = function () {
        console.log("Operatiing System");
    };
    return Laptop;
}());
var Macbook = /** @class */ (function (_super) {
    __extends(Macbook, _super);
    function Macbook() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Macbook.prototype.getOS = function () {
        console.log("MacOS");
    };
    return Macbook;
}(Laptop));
var DellLaptop = /** @class */ (function (_super) {
    __extends(DellLaptop, _super);
    function DellLaptop() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DellLaptop.prototype.getOS = function () {
        console.log("Windows");
    };
    return DellLaptop;
}(Laptop));
var obj1 = new Laptop();
var obj2 = new Macbook();
var obj3 = new DellLaptop();
obj1.getOS();
obj2.getOS();
obj3.getOS();
