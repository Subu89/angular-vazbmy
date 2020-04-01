import { Component, OnInit } from '@angular/core';
import { map, filter, take } from 'rxjs/operators';
import { interval, pipe } from 'rxjs';

@Component({
  selector: 'rxjs-example',
  templateUrl: './rxjs-example.component.html',
  styleUrls: ['./rxjs-example.component.css']
})
export class RxjsExampleComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    interval(1000)
      .pipe(
        take(3),
        map(v => Date.now())
      )
      .subscribe(value => console.log("Subscriber: " + value));
  }

}