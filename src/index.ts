import { Observable } from "rxjs";

const observable = new Observable((subscriber) => {
  subscriber.next(1);
  subscriber.next(2);
  subscriber.next(3);
  setTimeout(() => {
    subscriber.next(4);
    subscriber.complete();
  }, 1000);
});

console.log("Subscribing...");
observable.subscribe({
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
