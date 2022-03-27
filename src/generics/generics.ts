export abstract class BinarySum<T, R> {
  constructor(public value1: T, public value2: T) {}

  abstract execute(): R;
}

export class MyDate {
  constructor(public day: number, public month: number, public year: number) {}
}

export class DiferenceBetweenDates extends BinarySum<MyDate, string> {
  getTime(date: MyDate) {
    let { day, month, year } = date;

    return new Date(`${month}/${day}/${year}`).getTime();
  }

  execute(): string {
    const firstDate = this.getTime(this.value1);
    const secondDate = this.getTime(this.value2);

    const result = Math.abs(firstDate - secondDate);
    const dayInMilliseconds = 1000 * 60 * 60 * 24;

    return `${Math.ceil(result / dayInMilliseconds)} day(s)`;
  }
}

export class Queue<T extends string | number> {
  private queue: Array<T>;

  constructor(...args: T[]) {
    this.queue = args;
  }

  entry(element: T) {
    this.queue.push(element);
  }

  next(): T | null {
    if (this.queue.length > 0 && this.queue[0]) {
      const first = this.queue[0];
      this.queue.splice(0, 1);

      return first;
    }

    return null;
  }

  print() {
    console.log(this.queue);
  }
}
