// import { Subject } from 'rxjs';
const {Subject} = require('rxjs')
 
const subject = new Subject();
 
subject.subscribe({
  next: (v) => console.log(`observerA: ${v}`)
});
subject.subscribe({
  next: (v) => console.log(`observerB: ${v}`)
});

subject.next(1);
subject.next(2);
subject.next(true);