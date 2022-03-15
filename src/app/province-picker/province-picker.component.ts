import { Component, Input, OnInit } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';
import { Province } from '../province';

@Component({
  selector: 'app-province-picker',
  templateUrl: './province-picker.component.html',
  styleUrls: ['./province-picker.component.scss']
})
export class ProvincePickerComponent implements OnInit {

  @Input() provinces: string[] = [];
  selectedProvince: string = "";
  @Output() selectedProvinceEvent = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  newSelectedCommunity(){
    this.selectedProvinceEvent.emit(this.selectedProvince);
  }


}
