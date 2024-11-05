{
  // * Access modifier
  // "Public" and "Protected" properties can be inherited
  // from Parent class,
  // but can't inherit "Private" properties

  class BankAccount {
    public readonly id: number;
    public name: string;
    // private _balance: number;
    protected _balance: number;

    constructor(id: number, name: string, balance: number) {
      this.id = id;
      this.name = name;
      this._balance = balance;
    }

    // * Methods
    getBalance(): number {
      return this._balance;
    }

    depositBalance(balance: number) {
      this._balance += balance;
    }

    withdrawBalance(balance: number) {
      if (this._balance >= balance) {
        this._balance -= balance;
      } else {
        throw new Error("Insufficient balance!");
      }
    }
  }

  // Inherit Protected properties
  class StudentAccount extends BankAccount {
    checkBalance() {
      return this._balance;
    }
  }

  // Instances of BankAccount
  const account1 = new BankAccount(1, "John", 300);
  const account2 = new BankAccount(2, "Jenny", 200);

  // account1.id = 2;
  // account2.balance = 362472376762;
  // console.log(account1.id);

  let balance = account1.getBalance();
  console.log("Current balance: ", balance);

  account1.depositBalance(100);
  balance = account1.getBalance();
  console.log("After deposit: ", balance);

  account1.withdrawBalance(200);
  balance = account1.getBalance();
  console.log("After withdrawal: ", balance);

  //
}
