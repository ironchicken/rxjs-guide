import { Observable, asyncScheduler } from "rxjs";
import { observeOn } from "rxjs/operators";

const observable = new Observable((observer) => {
  observer.next(1);
  observer.next(2);
  observer.next(3);
  observer.next(4);
  observer.complete();
}).pipe(observeOn(asyncScheduler));

console.log("Before subscribe...");
observable.subscribe({
  next: (v) => console.log(`Observed ${v}`),
  complete: () => console.log("Done"),
});
console.log("After subscribe");
