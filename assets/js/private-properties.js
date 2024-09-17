/**
 * Class representing a bank account
 */
class Account{
    // Declaring a private field
    #balance;

    /**
     * Create an account
     * @param {number} balance - The initial balance of the account
     */
    constructor(balance){
        /**
         * @private
         * @type {number}
         */
        this.#balance = balance;
    }

    /**
     * Get the current balance
     * @returns {number} The current balance of the account
     */
    getBalance(){
        return this.#balance;
    }

    /**
     * Deposit money into the account
     * @param {number} amount - The amount of money to deposit
     */
    deposit(amount){
        if(amount > 0){
            this.#balance += amount;
        }else{
            console.log("Deposit amount must be a positivie number.")
        }
    }

    /**
     * Withdraw cash from the account
     * @param {number} amount - The amount of money to draw
     */
    withdraw(amount){
        if(amount > 0 && amount <= this.#balance){
            this.#balance -= amount
        } else if(amount > this.#balance){
            console.log("Insufficient funds");
        }else{
            console.log("Widthdrawl amount must be a postive number.")
        }
    }

}

const myAccount = new Account(1000);
console.log(myAccount.getBalance());

myAccount.deposit(500);
console.log(myAccount.getBalance());

myAccount.withdraw(300);
console.log(myAccount.getBalance());