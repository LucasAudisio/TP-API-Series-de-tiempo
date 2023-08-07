import { Component } from '@angular/core';
import { ClienteHttpService } from '../cliente-http.service';

@Component({
  selector: 'app-datos-api',
  templateUrl: './datos-api.component.html',
  styleUrls: ['./datos-api.component.css']
})
export class DatosApiComponent {
  datosTabla: any;
  error: string;
  seRecibio: boolean;

  //Incio
  anioInicio: number;
  mesInicio:number ;
  diaInicio : number;

  //Incio
  anioFinal: number;
  mesFinal:number;
  diaFinal : number;

  constructor(private http: ClienteHttpService){
    this.datosTabla = [];
    this.error = "";
    this.seRecibio = false;
    this.anioInicio = new Date(0).getFullYear();;
    this.mesInicio = new Date(0).getMonth();;
    this.diaInicio = new Date(0).getDay();;
    this.anioFinal = new Date().getFullYear();
    this.mesFinal = new Date().getMonth();
    this.diaFinal = new Date().getDay();
  }

  recibirDatos(){

    let fechaInicio: String = this.anioInicio + "-" + this.mesInicio + "-" + this.diaInicio;
    let fechaFinal: String = this.anioFinal + "-" + this.mesFinal + "-" + this.diaFinal;

    const opciones = {
      fechaInicio: fechaInicio,
      fechaFinal: fechaFinal
    }

    this.http.getDatos(opciones).subscribe({
      next: (response) =>{
        console.log(response);
        this.datosTabla = JSON.parse(JSON.stringify(response)).data;
        console.log(this.datosTabla)
        this.seRecibio = true;
        this.error = "";
      },
      error: (error) => {
        console.log(error);
        this.error = error.message;
      }
    })
  }
}
