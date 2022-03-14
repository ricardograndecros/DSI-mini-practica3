import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProvincesService {

  dataUrl = 'https://public.opendatasoft.com/api/records/1.0/search/?dataset=provincias-espanolas&q=&rows=52&sort=provincia&facet=ccaa&facet=provincia&facet=texto&facet=cod_ccaa&facet=codigo&facet=geo+shape&facet=geo+point';

  constructor() { }
}
