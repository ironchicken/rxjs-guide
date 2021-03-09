import { Subject } from "rxjs";

const subject = new Subject<number>();

subject.subscribe({
  next: (v) => console.log(`Observer A: ${v}`),
});

subject.subscribe({
  next: (v) => console.log(`Observer B: ${v}`),
});

subject.next(1);
subject.next(2);
