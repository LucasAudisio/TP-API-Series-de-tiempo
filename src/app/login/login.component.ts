import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ServicioUsuarioService } from '../servicio-usuario.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  mail: string;
  contrasenia: string;
  error: string;

  constructor(private router: Router, private userService: ServicioUsuarioService){
    this.mail = "";
    this.contrasenia = "";
    this.error = "";
  }

  goInicio(){
    this.router.navigate(["/"])
  }

  login(){
    this.userService.login(this.mail, this.contrasenia).then(response => {
      localStorage.setItem("clave", response.user.uid);
      this.router.navigate(["/"])
    }).catch(error => {
      this.error = error;
    })
  }
}
