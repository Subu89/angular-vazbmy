import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngif-example',
  templateUrl: './ngif-example.component.html',
  styleUrls: ['./ngif-example.component.css']
})
export class NgifExampleComponent implements OnInit {

  people: any[] = [
    {
      "name": "Douglas Pace",
      "age": 35
    },
    {
      "name": "McLeod Mueller",
      "age": 32
    },
    {
      "name": "Day Meyers",
      "age": 21
    },
    {
      "name": "Aguirre Ellis",
      "age": 34
    },
    {
      "name": "Cook Tyson",
      "age": 32
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}