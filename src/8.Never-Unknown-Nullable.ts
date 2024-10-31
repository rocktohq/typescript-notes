{
  // Nullable Type
  const search = (value: string | null) => {
    if (value === null) {
      console.log("Print all data");
    } else if (value) {
      console.log("Searching...");
    } else {
      console.log("Please provide a valid input!");
    }
  };

  search(null);

  //   Unknown Type
  const convertKmToMeterPerSecond = (value: unknown) => {
    if (typeof value === "number") {
      const result = (value * 1000) / 3600;
      console.log(`${result} ms^-1`);
    } else if (typeof value === "string") {
      const [splitedValue, unit] = value.split(" ");
      const result = (parseFloat(splitedValue) * 1000) / 3600;
      console.log(result, unit);
    } else [console.log("Please provide a valid input!")];
  };

  convertKmToMeterPerSecond("340 km");

  //   Never Type
  const thrError = (msg: string): never => {
    throw new Error(msg);
  };

  thrError("An unexpected error occurred!");
}
