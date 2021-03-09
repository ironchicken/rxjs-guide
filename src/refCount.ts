import { interval, Subject, Subscription } from "rxjs";
import { multicast } from "rxjs/operators";

const source = interval(500);
const subject = new Subject();
const multicasted = multicast(subject)(source);
let subs1: Subscription, subs2: Subscription, subsConnect: Subscription;

console.log("Subs1 subscribe");
subs1 = multicasted.subscribe({
  next: (v) => console.log(`Observer A: ${v}`),
});

subsConnect = multicasted.connect();

setTimeout(() => {
  console.log("Subs2 subscribe");
  subs2 = multicasted.subscribe({
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
  console.log("SubsConnect unsubscribe");
  subsConnect.unsubscribe();
}, 3000);
