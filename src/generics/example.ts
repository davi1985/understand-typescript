import { DiferenceBetweenDates, MyDate, Queue } from './generics';

// diference between dates
const day1 = new MyDate(1, 2, 2020);
const day2 = new MyDate(2, 3, 2022);

function differenceBetweenDates() {
  console.log(new DiferenceBetweenDates(day1, day2).execute());
}

// queue
const queue = new Queue<string>('Davi', 'Joelma', 'Sarah');
const queueWithConstraints = new Queue<number>(5, 6, 5, 7, 1);

function queueExample() {
  console.log('Queue String');
  queue.print();

  queue.entry('Bonny');

  queue.print();

  console.log(queue.next());
  console.log(queue.next());
  console.log(queue.next());

  queue.print();
}

function queueWithConstraintsExample() {
  console.log('Queue Number and constrains');

  queueWithConstraints.print();

  queueWithConstraints.entry(12);

  queueWithConstraints.print();

  console.log(queueWithConstraints.next());
  console.log(queueWithConstraints.next());
  console.log(queueWithConstraints.next());

  queueWithConstraints.print();
}

export { differenceBetweenDates, queueExample, queueWithConstraintsExample };
