class Student {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
  
    test() {
      console.log("hello");
    }
  
    exampleFunction() {
      let array = [1, 2, 3];
      array.find(function () {
        this.test(); // Accessing the test method
      }, this); // Passing `this` as the second argument to bind the correct context
    }
  }
  
  let student = new Student("Sumit", 35);
  student.exampleFunction();
  