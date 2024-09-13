
const readline = require('readline');


const diego = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


class hatdog {
  constructor(Number, carrier, balance = 0) {
    this.Number = Number;
    this.carrier = carrier;
    this.balance = balance;
  }

  
  addLoad(amount) {
    if (amount > 0) {
      this.balance += amount;
      console.log(
        `Successfully added ₱${amount} load to ${this.Number}. New balance: ₱${this.balance}.`
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


const user1 = new hatdog ("09191234567", "Smart", 0);


const askForLoad = () => {
  user1.checkBalance(); 

  diego.question("Pila man imong gusto idugang? ", (input) => {
    const loadAmount = parseInt(input, 10);  

    if (isNaN(loadAmount) || loadAmount <= 0) {
      console.log("Invalid load amount. Please enter a positive number.");
      askForLoad();  
    } else {
      user1.addLoad(loadAmount);  
            

      diego.question("Would you like to add more load? (yes/no) ", (answer) => {
        if (answer.toLowerCase() === 'yes') {
          askForLoad();  
        } else {
          console.log("Salamat haaaa!");
          diego.close();  
        }
      });
    }
  });
};


askForLoad();