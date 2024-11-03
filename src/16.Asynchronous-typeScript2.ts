{
  // #START
  // ** Asynchronous Types **
  // Type
  type Data = {
    id: number;
    name: string;
    email: string;
  };

  // Promise
  const createPromise = () => {
    return new Promise((resolve, reject) => {
      const data: Data = { id: 1, name: "Monir", email: "monir@gmail.moc" };
      if (data?.email) {
        resolve({ status: "success", data });
      } else {
        reject({ status: "error", message: "No data found" });
      }
    });
  };

  // Data fetching function
  const fetchData = async () => {
    try {
      const data = await createPromise();
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  };

  fetchData(); // Call fetchData()
  // #END
}
