import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngstyle-example',
  templateUrl: './ngstyle-example.component.html',
  styleUrls: ['./ngstyle-example.component.css']
})
export class NgstyleExampleComponent implements OnInit {

  getColor(country) {
    switch(country) {
      case "UK":
        return "green";
      case "USA":
        return "blue";
      case "HK":
        return "red";
    }
  }

  people: any[] = [
    {
      "name": "Douglas Pace",
      "country": "UK"
    },
    {
      "name": "McLeod Mueller",
      "country": "USA"
    },
    {
      "name": "Day Meyers",
      "country": "HK"
    },
    {
      "name": "Aguirre Ellis",
      "country": "UK"
    },
    {
      "name": "Cook Tyson",
      "country": "USA"
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}