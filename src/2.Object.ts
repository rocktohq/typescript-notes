{
  // * Object
  const person: {
    readonly firstName: string;
    lastName?: string | null; // Optional type
    age: number;
    isStudent?: boolean; // Optional type
    class: 10; // Lireral type
  } = {
    firstName: "Saidul",
    lastName: null,
    age: 10,
    isStudent: true,
    class: 10,
  };
}
