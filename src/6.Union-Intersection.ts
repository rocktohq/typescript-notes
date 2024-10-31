{
  // Union
  type User = {
    name: string;
    age: number;
    email?: string;
    gender: "male" | "female";
  };

  const user1: User = {
    name: "Monir",
    age: 9,
    gender: "male",
  };
  const user2: User = {
    name: "Anaya",
    age: 11,
    email: "anaya@gmail.com",
    gender: "female",
  };

  type JavaScriptDeveloper = "React" | "Vue" | "Angular";
  type PHPDeveloper = "Laravel" | "Cake" | "Symphony";
  type Developer = JavaScriptDeveloper | PHPDeveloper;

  const newDev1: JavaScriptDeveloper = "React";
  const newDev2: PHPDeveloper = "Laravel";
  const newDev3: Developer = "React";

  //   Intersection
  type FrontendDev = {
    skills: string[];
    designation1: "Frontend Developer";
  };

  type BackendDev = {
    skills: string[];
    designation2: "Backend Developer";
  };

  type FullstackDev = FrontendDev & BackendDev;
  const newDev4: FullstackDev = {
    skills: ["HTML", "CSS", "React.js", "Express.js", "MongoDB"],
    designation1: "Frontend Developer",
    designation2: "Backend Developer",
  };
}
