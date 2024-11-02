{
  // ** Generic with Interface **
  interface Developer<T, B = null> {
    name: string;
    age: number;
    stack: "Frontend" | "Backend" | "Fullstack";
    device: {
      type: "Desktop" | "Laptop";
      brand: string;
      model: string;
      releaseYear: number;
    };
    smartWatch: T;
    bike?: B;
  }

  // Case-1
  const dev1: Developer<{
    brand: string;
    model: string;
  } > = {
    name: "Monir Vai",
    age: 30,
    stack: "Frontend",
    device: {
      type: "Laptop",
      brand: "HP",
      model: "Probook 450 G4",
      releaseYear: 2023,
    },
    smartWatch: {
      brand: "Chinese",
      model: "C-380",
    },
  };

  // Case-2
  const dev2: Developer<
    {
      brand: string;
      model: string;
      heartRateMonitor: boolean;
      motionTracker: boolean;
    },
    {
      brand: string;
      model: string;
      engineCapcity: string;
    }
  > = {
    name: "Rockto Vai",
    age: 150,
    stack: "Fullstack",
    device: {
      type: "Laptop",
      brand: "Apple",
      model: "MacBook Air M3",
      releaseYear: 2023,
    },
    smartWatch: {
      brand: "Apple",
      model: "A6",
      heartRateMonitor: true,
      motionTracker: true,
    },
    bike: {
      brand: "Suzuki",
      model: "Gixxer",
      engineCapcity: "150 cc",
    },
  };
  // Case-3
  const dev3: Developer<boolean, boolean> = {
    name: "John Doe",
    age: 25,
    stack: "Frontend",
    device: {
      type: "Desktop",
      brand: "Dell",
      model: "XPS 15",
      releaseYear: 2021,
    },
    smartWatch: false,
    bike: false,
  };

  // For cleaner codebase, we need to separate the smartWatch type with type alias or interface
  // Case-4 : Separte with Type Alias
  type LowEndSmartWatch = {
    brand: string;
    model: string;
  };

  type Bike = {
    brand: string;
    model: string;
    engineCapcity: string;
  };
  const dev4: Developer<LowEndSmartWatch, Bike> = {
    name: "Rashed",
    age: 31,
    stack: "Frontend",
    device: {
      type: "Laptop",
      brand: "HP",
      model: "Elitebook",
      releaseYear: 2013,
    },
    smartWatch: {
      brand: "MI",
      model: "MI-5",
    },
    bike: {
      brand: "Suzuki",
      model: "AS",
      engineCapcity: "100 CC",
    },
  };

  // Case-5
  interface HighEndSmartWatch {
    brand: string;
    model: string;
    heartRateMonitor: boolean;
    motionTracker: boolean;
  }

  interface CoolBike {
    brand: string;
    model: string;
    engineCapcity: string;
  }

  const dev5: Developer<HighEndSmartWatch, CoolBike> = {
    name: "Roman",
    age: 29,
    stack: "Fullstack",
    device: {
      type: "Laptop",
      brand: "Apple",
      model: "MacBook Pro M3",
      releaseYear: 2023,
    },
    smartWatch: {
      brand: "Apple",
      model: "A6",
      heartRateMonitor: true,
      motionTracker: true,
    },
    bike: {
      brand: "Harley-Davidson",
      model: "Harley-Davidson Vengeance",
      engineCapcity: "250 cc",
    },
  };

  //
}
