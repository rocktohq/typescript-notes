{
  // Mapped Types ==>
  // Type Conversion
  type AreaNumber = {
    height: number;
    width: number;
  };

  type AreaString = {
    [key in keyof AreaNumber]: string;
  };

  type AreaBool = {
    [key in keyof AreaNumber]: boolean;
  };

  // From <Params>
  type AreaType<T> = {
    [key in keyof T]: T[key] extends number ? number : string;
  };

  const areaType1: AreaType<{
    height: number;
    width: number;
    area: string;
    isCompleted: boolean;
  }> = {
    height: 10,
    width: 20,
    area: "200",
    isCompleted: "true",
  };

  // <==
}
