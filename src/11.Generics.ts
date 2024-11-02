{
  // GenericType
  // <T> = <param>
  // We can pass parameter through <>
  type GenericArray<T> = Array<T>;

  const numberArray: GenericArray<number> = [1, 2, 3, 4];
  const boleanArray: GenericArray<boolean> = [true, false, false, true, false];
  const stringArray: GenericArray<string> = [
    "Hello",
    "World",
    "JavaScript",
    "TypeScript",
  ];

  // Alternative
  const numArr1: number[] = [1, 2, 3, 4];

  type NumArr = Array<number>;
  const numArr2: NumArr = [1, 2, 3, 4];

  // GenericTuple
  type GenericTuple<X, Y> = [X, Y];

  const tuple: GenericTuple<string, number> = ["Hello", 10];

  const userWithID: GenericTuple<
    number,
    { name: string; email: string; role: string }
  > = [1, { name: "Don", email: "don@don.me", role: "Admin" }];
  //
}
