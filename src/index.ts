{
  let course: string = "Appolo Level 2";
  //   console.log(course);

  type User = {
    firstName: string;
    lastName: string;
    age: number;
    address?: {
      houseNo: number;
      street?: string | null;
      city?: string;
      country?: string;
    };
  };

  const user: User = {
    firstName: "Saidul",
    lastName: "Mursalin",
    age: 5,
    address: {
      houseNo: 20,
      street: "Shahid Hiru Sarak",
      // street: null,
      city: "Jamalpur",
      country: "Bangladesh",
    },
  };

  const street: string = user?.address?.street ?? "Not Available!";
  //   console.log(street);

  const usdToBdtConvert = (usd: unknown) => {
    if (usd === "") {
      return {
        status: "error",
        msg: "Input is empty!",
      };
    } else if (typeof usd === "string") {
      const [usdValue] = usd.split(" ");
      const result = parseFloat(usdValue) * 120;
      return {
        status: "success",
        result,
      };
    } else if (typeof usd === "number") {
      const result = usd * 120;
      return {
        status: "success",
        result,
      };
    } else {
      return {
        status: "error",
        msg: "Invalid input!",
      };
    }
  };

  const converted = usdToBdtConvert(null);
  //   console.log(converted);

  if (converted?.status === "success") {
    console.log(`Result is: ${converted?.result} BDT`);
  } else {
    console.log(`Error: ${converted?.msg}`);
  }
}
