class BankAccount {
  #amount = 0;

  constructor(initialAmount) {
    this.#amount = initialAmount;
  }

  deposit(amount) {
    // throw an exception if amount is negative
    if (amount <0) {
      throw new Error ('Errore amount negativo')
    }
    this.#amount += amount
  }

  withdraw(amount) {
    // throw an exception if amount is negative or if withdrawal amount is greater than current amount
    if (amount <0) {
      throw new Error ('Errore amount negativo')
    }

    if (amount > this.#amount) {
      throw new Error ('Erroe amount maggiore')
    }

    this.#amount -= amount
  }

  view() {
    console.log(this.#amount);
  }
}

const bankAccount = new BankAccount(1000);
bankAccount.deposit(500);
bankAccount.deposit(200);
bankAccount.withdraw(10000); // This operation should not be possible, because you cannot withdraw more than the account balance
bankAccount.view();




//Implementare all'interno della classe BankAccount un controllo sui metodi deposit e withdraw. 
//Entrambi i metodi devono poter lanciare un errore qualora venisse passato un amount negativo. 
//Il metodo withdraw deve poter lanciare un errore anche qualora venisse passato un amount superiore rispetto al totale presente sul conto corrente.

