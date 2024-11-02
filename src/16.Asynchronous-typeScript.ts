{
  // Promise

  type Todo = {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
  };

  const getTodo = async (): Promise<Todo> => {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/todos/1"
    );

    const data = await response.json();
    return data;
    // console.log(data);
  };

  getTodo();

  type User = {
    id: number;
    name: string;
    email: string;
  };
  const createPromise = (): Promise<User> => {
    return new Promise<User>((resolve, reject) => {
      const data: User = {
        id: 1,
        name: "Kon",
        email: "kon@gmail.moc",
      };

      if (data) {
        resolve(data);
      } else {
        reject("No data available");
      }
    });
  };

  const getData = async (): Promise<User> => {
    const data: User = await createPromise();
    return data;
    // console.log(data);
  };

  getData();
  // console.log(data);

  // ==>
}
