//1
const Arr: number[] = [];
Arr.push(1);
Arr.push(2);
console.log(Arr);
//Arr.push('3');

//2
const stringOrNumberArr: (string | number)[] = [];
stringOrNumberArr.push(1);
stringOrNumberArr.push('2');
console.log(stringOrNumberArr);
//stringOrNumberArr.push(true);

//3
type numberOrBoolean = number | boolean;
let numberOrBooleanVar: numberOrBoolean;
numberOrBooleanVar = 1;
numberOrBooleanVar = true;
console.log(numberOrBooleanVar);
//numberOrBooleanVar = '2';

//4
function add(a: number = 0, b: number = 0) {
  return a + b;
}
console.log(add(1, 2));
console.log(add());

//5
interface IEmployee {
  id: number;
  name: string;
  get username(): string;
  email: string;
  address: object;
}
class Employee implements IEmployee {
  private _username: string;
  address: object;
  constructor(
    public id: number,
    public name: string,
    username: string,
    public email: string,
    address: object
  ) {
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

const employee = new Employee(
  employeeData.id,
  employeeData.name,
  employeeData.username,
  employeeData.email,
  employeeData.address
);
console.log(employee);

//6
class Manager extends Employee {
  constructor(
    id: number,
    name: string,
    username: string,
    email: string,
    address: object
  ) {
    super(id, name, username, email, address);
  }

  viewEmployeeAddress(employee: Employee): object {
    return employee.address;
  }
}

const manager = new Manager(
  2,
  'Ahmed Mahfouz',
  'MR.M1CR0',
  'ahmed@examlpe.com',
  employeeData.address
);
console.log(manager);
console.log(manager.viewEmployeeAddress(employee));

//7
interface IAccount {
  Date_of_opening: Date;
  addCustomer(): void;
  removeCustomer(): void;
}

class Account implements IAccount {
  Acc_no: number;
  Balance: number;
  Date_of_opening: Date;
  constructor(Acc_no: number, Balance: number, Date_of_opening: Date) {
    this.Acc_no = Acc_no;
    this.Balance = Balance;
    this.Date_of_opening = Date_of_opening;
  }
  addCustomer(): void {
    console.log('Customer Added');
  }
  removeCustomer(): void {
    console.log('Customer Removed');
  }
  debitAmount(): void {
    console.log('Amount Debited');
  }
  creditAmount(): void {
    console.log('Amount Credited');
  }
  getBalance(): number {
    return this.Balance;
  }
}

class Saving_Account extends Account {
  Min_Balance: number;
  constructor(
    Acc_no: number,
    Balance: number,
    Date_of_opening: Date,
    Min_Balance: number
  ) {
    super(Acc_no, Balance, Date_of_opening);
    this.Min_Balance = Min_Balance;
  }
}

class Current_Account extends Account {
  Interest_rate: number;
  constructor(
    Acc_no: number,
    Balance: number,
    Date_of_opening: Date,
    Interest_rate: number
  ) {
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
