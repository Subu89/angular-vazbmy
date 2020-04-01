import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngfor-example',
  templateUrl: './ngfor-example.component.html',
  styleUrls: ['./ngfor-example.component.css']
})
export class NgforExampleComponent implements OnInit {
  people: any[] = [
    {
      "name": "Douglas Pace"
    },
    {
      "name": "McLeod Mueller"
    },
    {
      "name": "Day Meyers"
    },
    {
      "name": "Aguirre Ellis"
    },
    {
      "name": "Cook Tyson"
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}