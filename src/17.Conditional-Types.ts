{
  // Conditional Types ==>
  type A = number;
  type B = null;
  type C = undefined;

  type X = A extends null ? true : false;
  type Y = B extends undefined
    ? string
    : C extends undefined
    ? number
    : boolean;

  type Sheikh = {
    bike: string;
    car: string;
    ship: string;
    jet: string;
  };

  type CheckVihecle<T> = T extends keyof Sheikh ? true : false;
  type HasBike = CheckVihecle<"bike">;

  // <==
}
