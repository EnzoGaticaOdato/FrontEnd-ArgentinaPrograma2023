import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NuevoUsuario } from '../model/nuevo-usuario';
import { Observable } from 'rxjs';
import { JwtDto } from '../model/jwt-dto';
import { LoginUsuario } from '../model/login-usuario';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  //authURL = 'https://backend-enzogaticaodato.onrender.com/auth/';
  
  authURL = 'http://localhost:8080/auth/';
  constructor(private httpCllient: HttpClient) { }

  public nuevo(nuevoUsuario: NuevoUsuario):Observable<any>{
    return this.httpCllient.post<any>(this.authURL + 'nuevo', nuevoUsuario);
  }

  public login(loginUsuario: LoginUsuario): Observable<JwtDto>{
    return this.httpCllient.post<JwtDto>(this.authURL + 'login', loginUsuario);
  }
}
