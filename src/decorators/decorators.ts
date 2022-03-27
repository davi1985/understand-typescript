function logClass(constructor: Function) {
  console.log(constructor);
}

function emptyDecorator(_: Function) {}

function logClassIf(value: boolean) {
  return value ? logClass : emptyDecorator;
}

function decorator(obj: { a: string; b?: number }) {
  return (_: Function): void => {
    console.log(obj.a, ' ', obj.b);
  };
}

type Construct = { new (...args: any[]): {} };

function logObject(constructor: Construct) {
  return class extends constructor {
    constructor(...args: any[]) {
      console.log('Before...');

      super(...args);

      console.log('After...');
    }
  };
}

interface HomeAppliances {
  print?(): void;
}
// @logClass
// @logClassIf(true)
// @decorator({ a: 'Test' })
@logObject
@printible
class HomeAppliances {
  constructor() {
    console.log('new');
  }
}

function printible(constructor: Function) {
  constructor.prototype.print = function () {
    console.log(this);
  };
}

(<any>new HomeAppliances()).print();

new HomeAppliances();
new HomeAppliances();

const homeAppliances = new HomeAppliances();
homeAppliances.print && homeAppliances.print();

class Account {
  @notNegative
  private balance: number;

  constructor(balance: number) {
    this.balance = balance;
  }

  @freeze
  withdraw(value: number) {
    if (value <= this.balance) {
      this.balance -= value;

      return true;
    }

    return false;
  }

  @freeze
  getBalance() {
    return this.balance;
  }
}

const account = new Account(10248.56);

console.log(account.getBalance());

// account.getBalance = function () {
//   return this['balance'] + 7000;
// };

// console.log(account.getBalance());

function freeze(
  target: any,
  propertyName: string,
  descritor: PropertyDescriptor,
) {
  console.log(target);
  console.log(propertyName);

  descritor.writable = false;
}

function notNegative(target: any, propertyName: string) {
  delete target[propertyName];

  Object.defineProperty(target, propertyName, {
    get: function (): any {
      return target['_' + propertyName];
    },
    set: function (value: any): void {
      if (value < 0) {
        throw new Error('Saldo inválido');
      } else {
        target['_' + propertyName] = value;
      }
    },
  });
}
