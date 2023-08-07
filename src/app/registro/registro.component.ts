import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ServicioUsuarioService } from '../servicio-usuario.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent {
  mail: string;
  contrasenia: string;
  error: string;
  respuesta: string;

  constructor(private router: Router, private usuarioService: ServicioUsuarioService){
    this.mail = "";
    this.contrasenia = "";
    this.error = "";
    this.respuesta = "";
  }

  goInicio(){
    this.router.navigate(["/"])
  }

  register(){
    this.usuarioService.register(this.mail, this.contrasenia).then(response => {
      this.router.navigate(["/login"])
    }).catch(error => {
      this.error = error;
    });
  }
}
