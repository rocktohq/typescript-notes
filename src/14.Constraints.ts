{
  // Constraints ==>

  interface Constraints {
    id: number;
    name: string;
    email: string;
  }

  const addCourseToStudent = <T extends Constraints>(student: T) => {
    const course: string = "TypeScript Technocrat";
    return {
      ...student,
      course,
    };
  };

  const student1 = addCourseToStudent({
    id: 1,
    name: "Akash",
    email: "akash@gmail.moc",
    age: 7,
  });
  const student2 = addCourseToStudent({
    id: 2,
    name: "Batas",
    age: 7,
    email: "batas@gmail.moc",
    hasBike: true,
    device: "Apple Macbook Air M3",
  });

  interface Student {
    id: number;
    name: string;
    email: string;
    hasBike?: boolean;
    hasWatch?: boolean;
  }

  const student3 = addCourseToStudent<Student>({
    id: 404,
    name: "Rockto",
    email: "rockto@email.moc",
    hasBike: true,
    hasWatch: true,
  });

  // console.log(student1, student2, student3);
  // <==
}
