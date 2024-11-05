{
  // * 4.Type Guard using InstanceOf
  class Animal {
    name: string;
    species: string;

    constructor(name: string, species: string) {
      this.name = name;
      this.species = species;
    }

    // Methods
    makeSound() {
      console.log(`${this.name} is making sound!`);
    }
  }

  class Cat extends Animal {
    constructor(name: string, species: string) {
      super(name, species);
    }

    makeMeaw() {
      console.log(`${this.name} meows!`);
    }
  }

  class Dog extends Animal {
    constructor(name: string, species: string) {
      super(name, species);
    }

    // Methods
    makeBark() {
      console.log(`${this.name} barks!`);
    }
  }

  // * Use class as type
  const getAnimal = (animal: Animal) => {
    if (animal instanceof Dog) {
      animal.makeBark();
    } else if (animal instanceof Cat) {
      animal.makeMeaw();
    } else {
      animal.makeSound();
    }
  };

  // * Smarter Way
  const isCat = (animal: Animal): animal is Cat => {
    return animal instanceof Cat;
  };

  const isDog = (animal: Animal): animal is Dog => {
    return animal instanceof Dog;
  };

  const getAnimal2 = (animal: Animal) => {
    if (isCat(animal)) {
      animal.makeMeaw();
    } else if (isDog(animal)) {
      animal.makeBark();
    }
  };

  // Instances
  const cat = new Cat("Persian", "cat");
  // cat.makeMeaw();
  const dog = new Dog("Labrador", "dog");
  // dog.makeBark();

  getAnimal(cat);
  getAnimal(dog);

  //GetAnimal2()
  getAnimal2(cat);
  getAnimal2(dog);

  //
}
