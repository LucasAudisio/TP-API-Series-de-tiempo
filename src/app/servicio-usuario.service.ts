import { Injectable } from '@angular/core';
import { initializeApp } from '@angular/fire/app';
import { Auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class ServicioUsuarioService {

  constructor(private auth: Auth) {
  }

  register(mail: string, password: string){
    return createUserWithEmailAndPassword(this.auth, mail, password);
  }

  login(mail: string, password: string){
    return signInWithEmailAndPassword(this.auth, mail, password);
  }

  logut(){
    return signOut(this.auth);
  }

  checkLogged(){
    if(this.auth.currentUser != undefined) return true;
    else return false;
  }
}
