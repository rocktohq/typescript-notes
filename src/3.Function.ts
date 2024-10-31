{
  // ** Function **
  // * Normal Function
  function addTwoNumbers(num1: number, num2: number): number {
    return num1 + num2;
  }

  let result = addTwoNumbers(10, 12);

  // * Arrow Function
  const addNumbers = (num1: number, num2: number): number => {
    return num1 + num2;
  };
  const addNumbers2 = (num1: number, num2: number): number => num1 + num2;

  // * Method : Object -> Function()
  const user = {
    firstName: "Saidul",
    lastName: "Mursalin",
    balance: 100,
    addBalance(amount: number): string {
      return `New balance: ${amount + this.balance}`;
    },
  };

  // * Array
  const numbers: number[] = [2, 3, 4, 5];
  const newNumbers: number[] = numbers.map(
    (number: number): number => number * number
  );

  const person = {
    firstName: "Saidul",
    middleName: "Mursalin",
    lastName: "Monir",
    age: 10,
    address: {
      city: "Jamalpur",
      country: "Bangladesh",
    },
  };
}
