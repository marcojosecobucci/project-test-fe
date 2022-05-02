import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-beta-test',
  templateUrl: './beta-test.component.html',
  styleUrls: ['./beta-test.component.css'],
})
export class BetaTestComponent implements OnInit {
  profiles = [
    { id: 'dev', name: 'Developer' },
    { id: 'man', name: 'Manager' },
    { id: 'dir', name: 'Director' },
  ];
  cities = [
    { id: 'kcp', name: 'Kanchipuram' },
    { id: 'prg', name: 'Prayagraj' },
    { id: 'twg', name: 'Tawang' },
  ];

  selectedProfile = new FormControl(this.profiles[0]);
  selectedCity = new FormControl(this.cities[0]);

  constructor() {}

  ngOnInit() {}

  editDate(date: string) {
    let dateSplit = date.split('-');

    return (date = dateSplit[2] + '-' + dateSplit[1] + '-' + dateSplit[0]);
  }

  onEditButtonClick() {}

  onProfileChange() {
    console.log(this.selectedProfile.value.id);
  }
  onCityChange() {
    console.log(this.selectedCity.value.id);
  }
}
