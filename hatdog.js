class Hatdog {
  constructor(number, balance = 0) {
    this.number = number;
    this.balance = balance;
  }

  addLoad(amount) {
    if (amount > 0) {
      this.balance += amount;
      console.log(
        `Successfully added ₱${amount} load to ${this.number}. New balance: ₱${this.balance}.`
      );
    } else {
      console.log("Invalid load amount.");
    }
  }

  checkBalance() {
    console.log(`Imong Balance kay ₱${this.balance}.`);
    return this.balance;
  }
}

const user1 = new Hatdog("09191234567", 0);


user1.addLoad(50);      
user1.checkBalance();