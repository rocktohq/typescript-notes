{
  // * Inheritance
  class Person {
    name: string;
    age: number;

    constructor(name: string, age: number) {
      this.name = name;
      this.age = age;
    }

    // * Method
    sleeps(numerOfHours: number): string {
      return `${this.name} sleeps for ${numerOfHours} hours`;
    }
  }

  class Student extends Person {
    studentId: number;

    constructor(name: string, age: number, studentId: number) {
      super(name, age);
      this.studentId = studentId;
    }

    // * Methods
    studnetInfo() {
      return `Student ID: ${this.studentId}, Name: ${this.name}, Age: ${this.age}`;
    }
  }

  const student1 = new Student("Monir", 11, 1122);
  console.log(student1.studnetInfo());
  console.log(student1.sleeps(6));

  class Teacher extends Person {
    teacherId: number;
    numberOfClasses: number;

    constructor(
      name: string,
      age: number,
      teacherId: number,
      numberOfClasses: number
    ) {
      super(name, age);
      this.teacherId = teacherId;
      this.numberOfClasses = numberOfClasses;
    }

    teach() {
      return `Teacher ${this.teacherId} teaches ${this.numberOfClasses} classes`;
    }
  }

  const teacher1 = new Teacher("Anaya", 9, 9876, 5);
  console.log(teacher1.teach());
  console.log(teacher1.sleeps(5));
  // *
}
