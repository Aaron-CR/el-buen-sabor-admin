import { Component, OnInit } from '@angular/core';


const DATA = [
  {
    name: 'Hungary',
    value: 13419
  },
  {
    name: 'Uzbekistan',
    value: 21431
  },
  {
    name: 'Côte D\'Ivoire',
    value: 46654
  },
  {
    name: 'Australia',
    value: 35511
  },
  {
    name: 'Brazil',
    value: 19035
  },
  {
    name: 'Spain',
    value: 31582
  },
  {
    name: 'Belgium',
    value: 52194
  },
  {
    name: 'American Samoa',
    value: 10774
  },
  {
    name: 'Christmas Island',
    value: 52051
  },
  {
    name: 'India',
    value: 50089
  },
  {
    name: 'Tuvalu',
    value: 56507
  },
  {
    name: 'Western Sahara',
    value: 13674
  },
  {
    name: 'Guernsey',
    value: 27419
  },
  {
    name: 'Gabon',
    value: 59304
  },
  {
    name: 'Solomon Islands',
    value: 48069
  },
  {
    name: 'Gambia',
    value: 24229
  },
  {
    name: 'Faroe Islands',
    value: 51820
  },
  {
    name: 'Lao People\'s Democratic Republic',
    value: 11304
  }
]

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  single = DATA;

  // options
  showXAxis = false;
  showYAxis = true;
  gradient = false;
  showLegend = true;

  colorScheme = 'fire';

  constructor() { }

  ngOnInit(): void {
  }

  onSelect(event) {
    console.log(event);
  }

}
