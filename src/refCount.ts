import { interval, Subject, Subscription } from "rxjs";
import { multicast, refCount } from "rxjs/operators";

const source = interval(500);
const subject = new Subject();
const refCounted = source.pipe(multicast(subject), refCount());
let subs1: Subscription, subs2: Subscription;

console.log("Subs1 subscribe");
subs1 = refCounted.subscribe({
  next: (v) => console.log(`Observer A: ${v}`),
});

setTimeout(() => {
  console.log("Subs2 subscribe");
  subs2 = refCounted.subscribe({
    next: (v) => console.log(`Observer B: ${v}`),
  });
}, 600);

setTimeout(() => {
  console.log("Subs1 unsubscribe");
  subs1.unsubscribe();
}, 1800);

setTimeout(() => {
  console.log("Subs2 unsubscribe");
  subs2.unsubscribe();
}, 3000);
