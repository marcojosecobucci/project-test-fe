import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-beta-test',
  templateUrl: './beta-test.component.html',
  styleUrls: ['./beta-test.component.css'],
})
export class BetaTestComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  editDate(date: string) {
    let dateSplit = date.split('-');

    return (date = dateSplit[2] + '-' + dateSplit[1] + '-' + dateSplit[0]);
  }
}
