{
  // Type Alias
  //   Object
  type User = {
    id: number;
    name: string;
    email: string;
    contactNo?: string;
    country?: string;
  };

  const user1: User = {
    id: 1,
    name: "John Doe",
    email: "john.doe@example.com",
    contactNo: "1234567890",
    country: "USA",
  };

  const user2: User = {
    id: 2,
    name: "Doe John",
    email: "doe.john@example.com",
    country: "ASU",
  };

  //   Boolean
  type IsAdmin = boolean;

  const isAdmin: IsAdmin = false;

  // Function
  type AddTwoNumbers = (number1: number, number2: number) => number;

  const addTwoNumbers: AddTwoNumbers = (num1, num2) => num1 + num2;
}
