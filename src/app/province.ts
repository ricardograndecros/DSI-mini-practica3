import { HttpClient } from "@angular/common/http";
import { min } from "rxjs";

export class Province {
    public CCAA: string;
    public native: string;
    public name: string;
    public cod_CCAA: number;
    public cod: number;
    public post_code: string;
    public min_code: string;
    public geo_x: number;
    public geo_y: number;
    public geo_shape: number[];

    constructor (CCAA: string, native: string, name: string, cod_CCAA: number,
        cod: number, post_code: string, min_code:string, geo_x: number, geo_y: number, geo_shape: number[]){
            this.CCAA = CCAA;
            this.native = native;
            this.name = name;
            this.cod_CCAA = cod_CCAA;
            this.cod = cod;
            this.post_code = post_code;
            this.min_code = min_code;
            this.geo_x = geo_x;
            this.geo_y = geo_y;
            this.geo_shape = geo_shape;
        } 
    
}

export const provincespc = [
    {
        province: "Álava",
        pc: "01",
        cmi: "VI",
    },
    {
        province: "Albacete",
        pc: "02",
        cmi: "AB",
    },
    {
        province: "Alacant",
        pc: "03",
        cmi: "A",
    },
    {
        province: "Almería",
        pc: "04",
        cmi: "AL",
    },
    {
        province: "Ávila",
        pc: "05",
        cmi: "AV",
    },
    {
        province: "Badajoz",
        pc: "06",
        cmi: "BA",
    },
    {
        province: "Illes Balears",
        pc: "07",
        cmi: "IB",
    },
    {
        province: "Barcelona",
        pc: "08",
        cmi: "B",
    },
    {
        province: "Burgos",
        pc: "09",
        cmi: "BU",
    },
    {
        province: "Cáceres",
        pc: "10",
        cmi: "CC",
    },
    {
        province: "Cádiz",
        pc: "11",
        cmi: "CA",
    },
    {
        province: "Castelló",
        pc: "12",
        cmi: "CS",
    },
    {
        province: "Ciudad Real",
        pc: "13",
        cmi: "CR",
    },
    {
        province: "Córdoba",
        pc: "14",
        cmi: "CO",
    },
    {
        province: "La Coruña",
        pc: "15",
        cmi: "C",
    },
    {
        province: "Cuenca",
        pc: "16",
        cmi: "CU",
    },
    {
        province: "Girona",
        pc: "17",
        cmi: "GI",
    },
    {
        province: "Granada",
        pc: "18",
        cmi: "GR",
    },
    {
        province: "Guadalajara",
        pc: "19",
        cmi: "GU",
    },
    {
        province: "Gipuzcoa",
        pc: "20",
        cmi: "SS",
    },
    {
        province: "Huelva",
        pc: "21",
        cmi: "H",
    },
    {
        province: "Huesca",
        pc: "22",
        cmi: "HU",
    },
    {
        province: "Jaén",
        pc: "23",
        cmi: "J",
    },
    {
        province: "León",
        pc: "24",
        cmi: "LE",
    },
    {
        province: "Lleida",
        pc: "25",
        cmi: "L",
    },
    {
        province: "La Rioja",
        pc: "26",
        cmi: "LO",
    },
    {
        province: "Lugo",
        pc: "27",
        cmi: "LU",
    },
    {
        province: "Madrid",
        pc: "28",
        cmi: "M",
    },
    {
        province: "Málaga",
        pc: "29",
        cmi: "MA",
    },
    {
        province: "Murcia",
        pc: "30",
        cmi: "MU",
    },
    {
        province: "Navarra",
        pc: "31",
        cmi: "NA",
    },
    {
        province: "Orense",
        pc: "32",
        cmi: "OR",
    },
    {
        province: "Asturias",
        pc: "33",
        cmi: "O",
    },
    {
        province: "Palencia",
        pc: "34",
        cmi: "P",
    },
    {
        province: "Las Palmas",
        pc: "35",
        cmi: "GC",
    },
    {
        province: "Pontevedra",
        pc: "36",
        cmi: "PO",
    },
    {
        province: "Salamanca",
        pc: "37",
        cmi: "SA",
    },
    {
        province: "Santa Cruz de Tenerife",
        pc: "38",
        cmi: "TF",
    },
    {
        province: "Cantabria",
        pc: "39",
        cmi: "S",
    },
    {
        province: "Segovia",
        pc: "40",
        cmi: "SG",
    },
    {
        province: "Sevilla",
        pc: "41",
        cmi: "SE",
    },
    {
        province: "Soria",
        pc: "42",
        cmi: "SO",
    },
    {
        province: "Tarragona",
        pc: "43",
        cmi: "T",
    },
    {
        province: "Teruel",
        pc: "44",
        cmi: "TE",
    },
    {
        province: "Toledo",
        pc: "45",
        cmi: "TO",
    },
    {
        province: "València",
        pc: "46",
        cmi: "V",
    },
    {
        province: "Valladolid",
        pc: "47",
        cmi: "VA",
    },
    {
        province: "Bizkaia",
        pc: "48",
        cmi: "BI",
    },
    {
        province: "Zamora",
        pc: "49",
        cmi: "ZA",
    },
    {
        province: "Zaragoza",
        pc: "50",
        cmi: "ZA",
    },
    {
        province: "Ceuta",
        pc: "51",
        cmi: "CE",
    },
    {
        province: "Melilla",
        pc: "52",
        cmi: "ML",
    },

   
]