"use strict";
const Arr = [];
Arr.push(1);
Arr.push(2);
console.log(Arr);
const stringOrNumberArr = [];
stringOrNumberArr.push(1);
stringOrNumberArr.push('2');
console.log(stringOrNumberArr);
let numberOrBooleanVar;
numberOrBooleanVar = 1;
numberOrBooleanVar = true;
console.log(numberOrBooleanVar);
function add(a = 0, b = 0) {
    return a + b;
}
console.log(add(1, 2));
console.log(add());
class Employee {
    id;
    name;
    email;
    _username;
    address;
    constructor(id, name, username, email, address) {
        this.id = id;
        this.name = name;
        this.email = email;
        this._username = username;
        this.address = address;
    }
    get username() {
        return this._username;
    }
}
const employeeData = {
    id: 1,
    name: 'Leanne Graham',
    username: 'Bret',
    email: 'Sincere@april.biz',
    address: {
        street: 'Kulas Light',
        suite: 'Apt.556',
        city: 'Gwenborough',
        zipcode: '92998-3874',
        geo: { lat: '-37.3159', lng: '81.1496' },
    },
};
const employee = new Employee(employeeData.id, employeeData.name, employeeData.username, employeeData.email, employeeData.address);
console.log(employee);
class Manager extends Employee {
    constructor(id, name, username, email, address) {
        super(id, name, username, email, address);
    }
    viewEmployeeAddress(employee) {
        return employee.address;
    }
}
const manager = new Manager(2, 'Ahmed Mahfouz', 'MR.M1CR0', 'ahmed@examlpe.com', employeeData.address);
console.log(manager);
console.log(manager.viewEmployeeAddress(employee));
class Account {
    Acc_no;
    Balance;
    Date_of_opening;
    constructor(Acc_no, Balance, Date_of_opening) {
        this.Acc_no = Acc_no;
        this.Balance = Balance;
        this.Date_of_opening = Date_of_opening;
    }
    addCustomer() {
        console.log('Customer Added');
    }
    removeCustomer() {
        console.log('Customer Removed');
    }
    debitAmount() {
        console.log('Amount Debited');
    }
    creditAmount() {
        console.log('Amount Credited');
    }
    getBalance() {
        return this.Balance;
    }
}
class Saving_Account extends Account {
    Min_Balance;
    constructor(Acc_no, Balance, Date_of_opening, Min_Balance) {
        super(Acc_no, Balance, Date_of_opening);
        this.Min_Balance = Min_Balance;
    }
}
class Current_Account extends Account {
    Interest_rate;
    constructor(Acc_no, Balance, Date_of_opening, Interest_rate) {
        super(Acc_no, Balance, Date_of_opening);
        this.Interest_rate = Interest_rate;
    }
}
const account = new Account(1, 1000, new Date());
console.log(account);
const savingAccount = new Saving_Account(2, 2000, new Date(), 500);
console.log(savingAccount);
const currentAccount = new Current_Account(3, 3000, new Date(), 5);
console.log(account.addCustomer());
console.log(account.removeCustomer());
console.log(account.debitAmount());
console.log(account.creditAmount());
console.log(account.getBalance());
