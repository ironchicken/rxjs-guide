import { BehaviorSubject } from "rxjs";

const subject = new BehaviorSubject(0);

subject.subscribe({
  next: (v) => console.log(`Observer A: ${v}`),
});

subject.next(1);
subject.next(2);

subject.subscribe({
  next: (v) => console.log(`Observer B: ${v}`),
});

subject.next(3);
subject.next(4);
