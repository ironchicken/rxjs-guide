import { Observable, of, interval } from "rxjs";
import { map, first } from "rxjs/operators";

const observable = new Observable((subscriber) => {
  subscriber.next(1);
  subscriber.next(2);
  subscriber.next(3);
  const intervalId = setTimeout(() => {
    subscriber.next(4);
    subscriber.complete();
  }, 1000);

  return {
    unsubscribe: () => clearTimeout(intervalId),
  };
});

console.log("Subscribing...");
const subscription = observable.subscribe({
  next: (x) => {
    console.log(`Got value ${x}`);
  },
  error: (err) => {
    console.error(err);
  },
  complete: () => {
    console.log("Finished");
  },
});
console.log("Subscribed...");

setTimeout(() => {
  subscription.unsubscribe();
  console.log("Unsubscribed");
}, 500);

const numbers = of(1, 2, 3);

map((x: number): number => x * x)(numbers).subscribe((v) =>
  console.log(`value: ${v}`)
);

first()(numbers).subscribe((v) => console.log(`first: ${v}`));

const ticker1 = interval(500);
const ticker2 = interval(200);

const atInterval1 = ticker1.subscribe((x) => console.log(`Ticker 1: ${x}`));
const atInverval2 = ticker2.subscribe((x) => console.log(`Ticker 2: ${x}`));

atInterval1.add(atInverval2);

setTimeout(() => atInterval1.unsubscribe(), 3000);
