import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DatosApiComponent } from './datos-api/datos-api.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegistroComponent } from './registro/registro.component';

const routes: Routes = [{
  path:"",
  component: HomeComponent,
  title:"inicio"
},
{
  path:"login",
  component: LoginComponent,
  title:"inicio sesion",
},
{
  path:"registro",
  component: RegistroComponent,
  title:"registro",
},
{
  path:"datosApi",
  component: DatosApiComponent,
  title:"datos",
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
