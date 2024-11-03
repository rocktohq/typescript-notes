{
  // Utility Types ==>
  //
  type Person = {
    name: string;
    age: number;
    email?: string;
    contactNo: string;
    address?: {
      city: string;
      country: string;
    };
  };

  // Pick: Take only given properties
  type PickedPerson = Pick<Person, "name" | "age">;

  // Omit: Take all excluding given properties
  type OmittedPerson = Omit<Person, "address">;

  // Required: Make all properties required
  type RequiredPerson = Required<Person>;

  // Partial: Make all properties optional
  type PartialPerson = Partial<Person>;

  // Readonly: Make all properties readonly
  type ReadonlyPerson = Readonly<Person>;

  // Record: Create records from properties
  type RecordObject = Record<string, string | number>;

  const person: RecordObject = {
    name: "Gunda",
    age: 91,
    email: "gunda@gmail.moc",
    contactNo: "0123456789",
  };

  const emptyObject: Record<string, unknown> = {};
  emptyObject.name = "Rockto";
  emptyObject.age = 6.5;
  emptyObject.email = "rockto@email.moc";
  emptyObject.isAdmin = true;
  emptyObject.isMarried = false;

  // <==
}
