// access-modifiers

// 1. public

class Employee{
    modify(arg0: number) {
        throw new Error("Method not implemented.");
    }
    display() {
        throw new Error("Method not implemented.");
    }
    name: string;
    public age: number;
    constructor(name: string, age: number){
    this.name= name;
    this.age= age;
    }
    }
    let emp = new Employee("John", 24);
    console.log(emp.name+"'s"+"age is "+emp.age);
    emp.name = "Winston";
    emp.age = 30;
    console.log(emp.name+"'5"+"age is "+emp.age);

    // 2. private
    class Employeeone{
        name: string;
        private age: number;
        constructor(name: string, age: number){
        this.name = name;
        this.age= age;
        }
        display(){
        console.log(this.age);
        }
        }
        let empone = new Employeeone("John", 30);
        emp.display();

    // 3. protected
    class Employeetwo{
        name: string;
        protected age: number;
        constructor(name: string, age: number){ this.name = name;
        this.age= age;
        }
        }
        class Manager extends Employeetwo{ designation: string; constructor(name: string, age: number, designation: string) { super(name, age); this.designation = designation;
        }
        display(){
        console.log(this.age);
        }
        modify(num:number){
        this.age= num;
        }
        }
        let emptwo = new Manager ("Winston", 45, "Manager")
        emp.display();
        emp.modify(90);
        emp.display();