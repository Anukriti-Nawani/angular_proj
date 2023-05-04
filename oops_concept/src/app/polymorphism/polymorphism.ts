// polymorphism
// method overloading
// method overriding


//  1. method overloading
class Example{
  
    /**
    function declaration
    **/
    add(a:string, b:string): string;
    add(a:number, b:number): number; // method add is overloaded by providinng different parameter type and return type
    
    /**
    function definition
    **/
    add(a:any, b:any):any{
      return a+b;
    }
    
  }
  
  let object= new Example();
    /**
    print to console
    **/
  console.log(object.add("Hello ","John"));
  console.log(object.add(1,1));




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
class Laptop{
    getOS(){
      console.log("Operatiing System");
    }
  }
  
  class Macbook extends Laptop{
    getOS(){
      console.log("MacOS");
    }
  }
  
  class DellLaptop extends Laptop{
    getOS(){
      console.log("Windows");
    }
  }
  
  let obj1 = new Laptop();
  let obj2 = new Macbook();
  let obj3 = new DellLaptop();
  
  obj1.getOS();
  obj2.getOS();
  obj3.getOS();