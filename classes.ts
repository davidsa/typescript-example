type WithdrawResult = {
  amount: number,
  balance: number
}

interface IAccount {
  type: string
  balance: number
  deposit: (amount: number) => void
  withdraw: (amount: number) => WithdrawResult  
}

class SavingsAccount implements IAccount {
  type: string 
  balance = 0

  constructor(type: string){
    this.type = type;
  }

  deposit(amount: number): void {
    this.balance = amount
  }

  withdraw(amount: any): WithdrawResult {
    const newBalance = this.balance - amount
    if(newBalance < 0){
      throw new Error('Not enough money baby baby')
    }
    this.balance = newBalance
    return {
      amount,
      balance: this.balance
    }
  }
}

const myAccount = new SavingsAccount('savings')
