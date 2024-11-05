{
  // * OOP: Object Oriented Programming
  // Class
  class Vehicle {
    brand: string;
    model: string;
    hasAutoGear: boolean;

    // Constructor
    constructor(brand: string, model: string, hasAutoGear: boolean) {
      this.brand = brand;
      this.model = model;
      this.hasAutoGear = hasAutoGear;
    }

    // Methods
    startEngine() {
      console.log(`${this.brand} ${this.model} is starting the engine.`);
    }
  }

  // Instance
  const bmwR8 = new Vehicle("BMW", "R8", true);
  const toyotaLandCruser = new Vehicle("TOYOTA", "Land Cruser", true);
  const gSeries = new Vehicle("Mercedes", "G-Class SUV", false);

  gSeries.startEngine();
  toyotaLandCruser.startEngine();

  // Modifier
  class Animal {
    constructor(
      public name: string,
      public bread: string,
      public sound: string
    ) {}

    // Method
    makeSound() {
      console.log(`${this.bread} ${this.name} makes ${this.sound} sound.`);
    }
  }

  // Instance
  const cat = new Animal("Cat", "Persian", "meow meow");
  cat.makeSound();

  //
}
