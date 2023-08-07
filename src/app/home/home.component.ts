import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ServicioUsuarioService } from '../servicio-usuario.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  inicioSesion: boolean;

  constructor(private router: Router, private userService: ServicioUsuarioService){
    this.inicioSesion = false;
  }

  goLogin(){
    this.router.navigate(["/login"])
  }

  goRegistro(){
    this.router.navigate(["/registro"])
  }
  
  goDatosGob(){
    this.router.navigate(["/datosApi"])
  }

  cerrarSesion(){
    this.userService.logut();
    this.inicioSesion = false;
  }

  ngOnInit(){
    if(this.userService.checkLogged()) this.inicioSesion = true;
    else this.inicioSesion = false;
  }
}
