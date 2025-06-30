// Implement encapsulation: create a class with private fields for balance and methods to deposit and withdraw.

class Bank {
  #balance;

  constructor(balance) {
    this.#balance = balance;
  }

  deposit = (amount) => {
    this.#balance += amount;
    console.log(`your new balance is ${this.#balance}`);
  };
  withdraw = (amount) => {
    if (amount > this.#balance)
      return console.log("You cannot withdraw more than you have");
    else {
      this.#balance -= amount;
      console.log(`Now you have ${this.#balance} left!`);
    }
  };
}

const bank = new Bank(1000);
bank.deposit(500);
bank.withdraw(200);
