{
  // *
  // Key Notes:
  // 1. Interface and Type are same => "type"
  // 2. Type can be used to determine all primitive and non-primitive types
  // 3. Interface can be used to determine only non-primitive types "object"
  // 4. Interface can be Extended with Type
  // 5. Similarly Tpe can be extended with Interface

  // Interface
  interface User1 {
    id: number;
    fullName: string;
    age?: number;
  }

  const user1: User1 = {
    id: 1,
    fullName: "Rakib",
    age: 98,
  };

  // Interface: Extends
  interface UserWithRole1 extends User1 {
    role: "Administrator" | "Modarator" | "User";
  }
  const userWithRole1: UserWithRole1 = {
    id: 33,
    fullName: "Sakib",
    age: 90,
    role: "Administrator",
  };

  // Type
  type User2 = {
    id: number;
    fullName: string;
    age?: number;
  };

  const user2: User2 = {
    id: 2,
    fullName: "Saidul",
  };

  type IsLoggedIn = boolean;
  const isLoggedIn: IsLoggedIn = true;

  // Type: Extends
  type UserWithRole2 = User2 & { role: "Administrator" | "Modarator" | "User" };
  const userWithRole2: UserWithRole2 = {
    id: 44,
    fullName: "Onizuka",
    age: 101,
    role: "Modarator",
  };

  // Misx Extends
  interface IsAdmin1 extends User2 {
    isAdmin: boolean;
  }

  const user4: IsAdmin1 = {
    id: 55,
    fullName: "Muralin",
    age: 100,
    isAdmin: true,
  };

  type IsAdmin2 = User1 & { isAdmin: boolean };
  const user5: IsAdmin2 = {
    id: 56,
    fullName: "Luffy",
    age: 95,
    isAdmin: false,
  };

  // Interface and Type alias in Function
  interface AddFive {
    (num: number): number;
  }
  const addFive: AddFive = (num: number) => num + 5;

  type AddTen = (num: number) => number;
  const addTen: AddTen = (num: number) => num + 10;

  // *
}
