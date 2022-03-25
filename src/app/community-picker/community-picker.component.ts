import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-community-picker',
  templateUrl: './community-picker.component.html',
  styleUrls: ['./community-picker.component.scss']
})
export class CommunityPickerComponent implements OnInit {

  @Input() communities: string[] = [];
  selectedCommunity: string = "";
  @Output() selectedCommunityEvent = new EventEmitter<string>();


  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(){
  }

  newSelectedCommunity(){
  
    this.selectedCommunityEvent.emit(this.selectedCommunity);
  }

}
;