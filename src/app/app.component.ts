import { HttpClient } from '@angular/common/http';
import { APP_INITIALIZER, Component } from '@angular/core';
import { Province } from './province';
import { ProvincesService } from './provinces.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'DSI-mini-practica3';

  rawData: any;
  provinceData : Province[] = []

  constructor(private provinceService: ProvincesService, 
    private http: HttpClient){}

  ngOnInit(){
    this.getData()
  }

  getData(){
    this.http.get(this.provinceService.dataUrl).subscribe((result)=>{
        this.rawData = result;
        this.initializeData();
    })
  }

  initializeData(){
    this.rawData.records.forEach((record: any) => {
      var province = new Province(record.fields.ccaa, record.fields.native, 
        record.fields.name, record.fields.cod_CCAA, record.fields.codigo, 
        record.fields.geo_point_2d[0], record.fields.geo_point_2d[1],
        record.fields.geo_shape);
      this.provinceData.push(province);
    });
    console.log(this.provinceData)
  }

}
