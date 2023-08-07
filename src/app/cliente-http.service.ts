import { Injectable } from '@angular/core';
import { HttpClient } from  '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ClienteHttpService {
  ruta: string;

  constructor(private http: HttpClient) {
    this.ruta = "https://apis.datos.gob.ar/series/api/series/?ids=tcrse_4sgTaJ";
  }

  getDatos(opciones: any){
    console.log(opciones);
    let ruta = this.ruta;
    if(opciones.fechaFinal != undefined){
      ruta += "&start_date=" + opciones.fechaInicio;
    }
    if(opciones.fechaInicio != undefined){
      ruta += "&end_date=" + opciones.fechaFinal;
    }
    console.log(ruta);
    return this.http.get(ruta);
  }
}
