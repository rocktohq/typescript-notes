{
  // * Type Guard
  type NormalUser = {
    name: string;
    email: string;
    age: number;
  };

  type AdminUser = {
    name: string;
    email: string;
    age: number;
    role: "admin";
  };

  const getUser = (user: NormalUser | AdminUser) => {
    if ("role" in user) {
      console.log(`${user.name} is an admin`);
    } else {
      console.log(`${user.name} is a normal user`);
    }
  };

  const normalUser: NormalUser = {
    name: "Monir Vai",
    email: "monirvai@gmail.moc",
    age: 8,
  };

  const adminUser: AdminUser = {
    name: "Saidul",
    email: "itzmonir@gmail.com",
    age: 30,
    role: "admin",
  };

  getUser(normalUser);
  getUser(adminUser);

  //
}
