import { from, Subject } from "rxjs";
import { multicast } from "rxjs/operators";

const source = from([1, 2, 3, 4, 5]);
const subject = new Subject<number>();
const multicasted = multicast(subject)(source);
// const multicasted = source.pipe(multicast(subject));

multicasted.subscribe({
  next: (v) => console.log(`Observer A: ${v}`),
});
multicasted.subscribe({
  next: (v) => console.log(`Observer B: ${v}`),
});
multicasted.subscribe({
  next: (v) => console.log(`Observer C: ${v}`),
});

multicasted.connect();
