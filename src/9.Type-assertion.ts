{
  // Type Assertions
  let myVar: any;

  myVar = "Hello World!";
  (myVar as string).toUpperCase();

  myVar = 123;
  (myVar as number).toFixed(2);

  myVar = [1, 2, 3];
  (myVar as []).length;

  myVar = { name: "Saidul Mursalin", age: 70, isLearning: true };
  // (myVar as {})

  //
  const kmToMeter = (value: number | string) => {
    if (typeof value === "number") {
      return value * 1000;
    } else if (typeof value === "string") {
      const numberValue = parseFloat(value);
      const convertedValue = numberValue * 1000;
      return `Converted value is: ${convertedValue}`;
    }
  };

  const result1 = kmToMeter(99) as number;
  const result2 = kmToMeter("77") as string;

  // Error
  type CustomError = {
    status?: number;
    message: string;
  };
  try {
  } catch (error) {
    console.log((error as CustomError).message);
  }
  //
}
