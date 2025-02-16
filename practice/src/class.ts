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


class employee{
    private salary:number
    constructor(salary:number)
    {
        this.salary=salary
    }
    protected getSalary():number{
        return this.salary
    }
}

class manager extends employee{
    constructor(salary:number)
    {
        super(salary)
    }
    showSalary():void{
        console.log(`manager salary ${this.getSalary()}`)
    }
}

const details=new manager(5000)
details.showSalary()