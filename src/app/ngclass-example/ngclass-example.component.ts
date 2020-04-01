import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngclass-example',
  templateUrl: './ngclass-example.component.html',
  styleUrls: ['./ngclass-example.component.css']
})
export class NgclassExampleComponent implements OnInit {

  people: any[] = [
    {
      "name": "Douglas Pace",
      "age": 35,
      "country": "UK"
    },
    {
      "name": "McLeod Mueller",
      "age": 32,
      "country": "USA"
    },
    {
      "name": "Day Meyers",
      "age": 21,
      "country": "HK"
    },
    {
      "name": "Aguirre Ellis",
      "age": 34,
      "country": "UK"
    },
    {
      "name": "Cook Tyson",
      "age": 32,
      "country": "USA"
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}