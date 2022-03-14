import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProvincePickerComponent } from './province-picker/province-picker.component';
import { ProvincesService } from './provinces.service';

@NgModule({
  declarations: [
    AppComponent,
    ProvincePickerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [ProvincesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
