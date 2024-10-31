{
  // Spread Operator
  const friends1: string[] = ["a", "b", "c", "d", "e"];
  const friends2: string[] = ["f", "g", "h", "i", "j"];
  const friendList: string[] = [...friends1, ...friends2];
  const friends3 = ["k", "l", "m", "n", "o"];

  friendList.push(...friends3);

  const mobiles = {
    iPhone: "12",
    OnePlus: "9RT",
    Samsung: "Guru Music",
  };
  const computers = {
    Macbook: "Air M3",
    HP: "Probook 450 g4",
  };
  const allDevices = { ...mobiles, ...computers };

  // Rest Operator (...array)
  const greetFriends = (...friends: string[]) => {
    friends.forEach((friend) => console.log(`Hello ${friend}`));
  };
}
