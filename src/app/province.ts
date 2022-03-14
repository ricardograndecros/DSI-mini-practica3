import { HttpClient } from "@angular/common/http";

export class Province {
    public CCAA: string;
    public native: string;
    public name: string;
    public cod_CCAA: number;
    public cod: number;
    public geo_x: number;
    public geo_y: number;
    public geo_shape: number[];

    constructor (CCAA: string, native: string, name: string, cod_CCAA: number,
        cod: number, geo_x: number, geo_y: number, geo_shape: number[]){
            this.CCAA = CCAA;
            this.native = native;
            this.name = name;
            this.cod_CCAA = cod_CCAA;
            this.cod = cod;
            this.geo_x = geo_x;
            this.geo_y = geo_y;
            this.geo_shape = geo_shape;
        } 
    
}