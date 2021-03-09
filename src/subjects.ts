import { Subject, from } from "rxjs";

const subject = new Subject<number>();

subject.subscribe({
  next: (v) => console.log(`Observer A: ${v}`),
});

subject.subscribe({
  next: (v) => console.log(`Observer B: ${v}`),
});

const observable = from([1, 2, 3]);

observable.subscribe(subject);
