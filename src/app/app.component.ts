import { HttpClient } from '@angular/common/http';
import { APP_INITIALIZER, Component, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { CommunityPickerComponent } from './community-picker/community-picker.component';
import { Province, provincespc } from './province';
import { ProvincePickerComponent } from './province-picker/province-picker.component';
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
  communitiesList: string[] = [];
  provincesList: string[] = []; 
  selectedCommunity: string = "";
  selectedProvince: string = "";
  selectedProvinceObject: Province = new Province("", "", "", -1, -1, -1, -1, [0]);

  showInfo: boolean = false;

  constructor(injector: Injector, private provinceService: ProvincesService, 
    private http: HttpClient){
      const communityPicker = createCustomElement(CommunityPickerComponent, {injector});
      customElements.define('community-picker', communityPicker);

      const provincePicker = createCustomElement(ProvincePickerComponent, {injector});
      customElements.define('province-picker', provincePicker);
    }

  ngOnInit(){
    // execute API call on init to fetch data
    this.getData()
  }

  selectProvince(province: string){
    this.selectedProvince = province;

    this.provinceData.forEach((iter) => {
      if (iter.native == province){
        this.selectedProvinceObject = iter;
      }
    })
    // hide text
    this.showInfo = false;
  }

  filterProvinces(community: string){
    // this function is called when a new community is selected on child
    this.selectedCommunity = community;

    if(community != ""){
      this.provincesList = []; // reset provinceList
      this.selectedProvince  = ""; // reset selected province
      this.provinceData.forEach((province) =>{
        // build filtered provinces list based on selected community
        if(province.CCAA == community){
          this.provincesList.push(province.native);
        }
      })
    }
    // hide text
    this.showInfo = false;
  }

  getData(){
    // loads initial data when page is reloaded
    this.http.get(this.provinceService.dataUrl).subscribe((result)=>{
        this.rawData = result;
        this.initializeData(); // build objects after fetching data
    })
  }

  initializeData(){
    // builds provinceData array of Provinces
    this.rawData.facet_groups[0].facets.forEach((community: any) =>{
      this.communitiesList.push(community.name);
    })
    this.rawData.records.forEach((record: any) => {
      var province = new Province(record.fields.ccaa, record.fields.provincia, 
        record.fields.texto, record.fields.cod_ccaa, record.fields.codigo, 
        record.fields.geo_point_2d[0], record.fields.geo_point_2d[1],
        record.fields.geo_shape);
      console.log(province);
      this.provinceData.push(province);
    });
    console.log(this.provinceData)
  }

  getCodesCMI(){

    provincespc.filter(province =>
      province.province.toLocaleLowerCase().includes(this.selectedProvince.toLocaleLowerCase())
    )

    return provincespc[0].cmi
  }
  getCodesCP(){

    provincespc.filter(province =>
      province.province.toLocaleLowerCase().includes(this.selectedProvince.toLocaleLowerCase())
    )

    return provincespc[0].pc
  }

}
