{
  // Constraint using key of ==>
  type Vehicles = {
    bike: string;
    car: string;
    ship: string;
    jet: string;
  };

  type NewVehicles1 = "bike" | "car" | "ship" | "jet";
  type NewVehicles2 = keyof Vehicles;

  const vehicle1: NewVehicles1 = "bike";
  const vehicle2: NewVehicles2 = "ship";

  const getPropertyValue = <T, Q extends keyof T>(object: T, key: Q) => {
    return object[key];
  };

  const user1 = {
    id: 1,
    name: "John",
    email: "john@gmail.moc",
    age: 30,
  };

  const car1 = {
    brand: "Mercedes",
    model: "G-Class SUV",
    year: 2024,
  };

  const value1 = getPropertyValue(user1, "email");
  const value2 = getPropertyValue(car1, "year");

  // console.log(value1, value2);

  // <==
}
