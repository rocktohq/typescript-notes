{
  // ** Function with Generic
  const createArray = (value: string): string[] => {
    return [value];
  };

  const createArrayWithGeneric = <T>(value: T): T[] => {
    return [value];
  };

  const resNum = createArrayWithGeneric<number>(100);
  const resBool = createArrayWithGeneric<boolean>(true);
  const resString = createArrayWithGeneric<string>("Test string");
  const resObj = createArrayWithGeneric<{ name: string; age: number }>({
    name: "Monir",
    age: 3,
  });

  // Generic function with Type || Interface
  type User1 = { name: string; age: number };
  interface User2 {
    name: string;
    age: number;
  }

  const user1 = createArrayWithGeneric<User1>({ name: "Pon", age: 2 });
  const user2 = createArrayWithGeneric<User2>({ name: "Mon", age: 1 });

  // GenericTuple
  const createArrayWithTuple = <S, T>(value1: S, value2: T): [S, T] => {
    return [value1, value2];
  };

  const tupleNum = createArrayWithTuple<number, number>(100, 200);
  const tupleBool = createArrayWithTuple<string, boolean>("Alive", true);
  const tupleString = createArrayWithTuple<string, string>(
    "String1",
    "String2"
  );
  const tupleMix = createArrayWithTuple<string, number>("id", 1);
  const tupleObj = createArrayWithTuple<number, { name: string; age: number }>(
    404,
    {
      name: "Monir",
      age: 3,
    }
  );

  //
  const addCourseToStudent = <T>(student: T) => {
    const course: string = "TypeScript Technocrat";
    return {
      ...student,
      course,
    };
  };

  const student1 = addCourseToStudent({ name: "Batas", age: 7 });

  interface Student {
    id: number;
    name: string;
    email: string;
  }
  const student2 = addCourseToStudent<Student>({
    id: 404,
    name: "Rockto",
    email: "rockto@email.moc",
  });

  // console.log(student2);

  //
}
