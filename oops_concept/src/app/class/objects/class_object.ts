class Employee{
    name: string;
    age: number;
    constructor(n: string, a: number){
      this.name= n;
      this.age=a;
    }
  }
  
  let emp = new Employee("John", 24); // object emp instanciated of type Employee and hence consumed some space in the memory
  console.log(emp.name); // accessed the property 'name' of the object emp of type Employee
  console.log(emp.age);