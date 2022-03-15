import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { ProvincePickerComponent } from './province-picker/province-picker.component';
import { ProvincesService } from './provinces.service';
import { DisplayInfoComponent } from './display-info/display-info.component';
import { CommunityPickerComponent } from './community-picker/community-picker.component';

@NgModule({
  declarations: [
    AppComponent,
    ProvincePickerComponent,
    DisplayInfoComponent,
    CommunityPickerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [ProvincesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
