"use strict";
// class person{
//     public name:string;
//     constructor(name:string)
//     {
//         this.name=name
//     }
//    public getname():string{
//         return this.name
//     }
// }
// const personName = new person('aswin')
// console.log(personName.getname())
// class bankAccount {
//     private balance: number;
//     constructor(balance: number) {
//         this.balance = balance
//     }
//     public addBalance(balance: number) {
//         this.balance += balance
//     }
//     private showBalance():number{
//         return this.balance
//     }
// }
// const bankDetails= new bankAccount(5000)
// bankDetails.addBalance(1000)
// bankDetails.showBalance()
class employee {
    constructor(salary) {
        this.salary = salary;
    }
    getSalary() {
        return this.salary;
    }
}
class manager extends employee {
    constructor(salary) {
        super(salary);
    }
    showSalary() {
        console.log(`manager salary ${this.getSalary()}`);
    }
}
const details = new manager(5000);
details.showSalary();
