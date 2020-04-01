import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngfor-grouped-example',
  templateUrl: './ngfor-grouped-example.component.html',
  styleUrls: ['./ngfor-grouped-example.component.css']
})
export class NgforGroupedExampleComponent implements OnInit {

  peopleByCountry: any[] = [
    {
      'country': 'UK',
      'people': [
        {
          "name": "Douglas Pace",
        },
        {
          "name": "McLeod Mueller"
        },
      ]
    },
    {
      'country': 'US',
      'people': [
        {
          "name": "Day Meyers"
        },
        {
          "name": "Aguirre Ellis"
        },
        {
          "name": "Cook Tyson"
        }
      ]
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}