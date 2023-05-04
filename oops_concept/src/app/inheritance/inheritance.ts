
class Manager{               
    firstName : string;
    lastName : string;
    salary: number
    email: string;
  
    constructor(firstName: string, lastName: string, salary: number, email: string){
      this.firstName= firstName;
      this.lastName= lastName;
      this.email= email;
      this.salary= salary;
    }
  }
  
  //Derived class
  class AreaManager extends Manager{ 
    area: string;
    constructor(firstName: string, lastName: string, salary: number, email: string, area: string){
      super(firstName, lastName, salary, email);
      this.area= area;

    }
    
  }
  
  const manager = new Manager("John", "Doe", 25000, "john@xyz.com");  
  const areaManager = new AreaManager("Chun", "Li", 35000, "chun@xyz.com", "Los Angeles");


  console.log(`Manager's name: ${manager.firstName} ${manager.lastName}`);
  console.log(`Manager's salary: ${manager.salary}`);
  console.log(`Area Manager's name: ${areaManager.firstName} ${areaManager.lastName}`);
  console.log(`Area Manager's salary: ${areaManager.salary}`);
  console.log(`Area Manager's area of duty: ${areaManager.area}`);





  class Animal {
    name: string;
    constructor(theName: string) {
      this.name = theName;
    }
    move(distanceInMeters: number = 0) {
      console.log(`${this.name} moved ${distanceInMeters}m.`);
    }
  }
  
  class Snake extends Animal {
    constructor(name: string) {
      super(name);
    }
    move(distanceInMeters = 5) {
      console.log("Slithering...");
      super.move(distanceInMeters);
    }
  }
  
  class Horse extends Animal {
    constructor(name: string) {
      super(name);
    }
    move(distanceInMeters = 45) {
      console.log("Galloping...");
      super.move(distanceInMeters);
    }
  }
  
  let sam = new Snake("Sammy the Python");
  let tom: Animal = new Horse("Tommy the Palomino");
  
  sam.move();
  tom.move(34);