{
  // ** Ternary, Optional Chaining & Nullish Coalescing Operator **

  //   Ternary Operator
  const age: number = 17;
  const isAdult = age >= 18 ? "Adult" : "Minor";
  console.log({ isAdult });

  //   Optional Chaining
  type Person = {
    name: string;
    age: number;
    phone?: string;
    address?: {
      city?: string;
      country?: string;
    };
  };
  const person: Person = {
    name: "Abdullah",
    age: 2,
    address: {
      city: "Jamalpur",
      country: "Bangladesh",
    },
  };
  const country = person?.address?.country;

  //   Nulish Coalescing Operator
  const isAAuthenticatedUser: null | undefined | string = null;
  const user = isAAuthenticatedUser ?? "Guest";
  const optionalUser = isAAuthenticatedUser ? isAAuthenticatedUser : "Guest";
  console.log({ user }, {});

  const phone = person?.phone ?? "Not available";
  console.log({ phone });
}
