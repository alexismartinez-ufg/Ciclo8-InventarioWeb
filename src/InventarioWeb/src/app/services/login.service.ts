import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { appsettings } from '../settings/appsettings';
import { catchError, Observable, throwError } from 'rxjs';
import { Login } from '../interfaces/Login';
import { ResponseJwt } from '../interfaces/ResponseJwt';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private http = inject(HttpClient);
  private baseUrl:string = appsettings.apiUrl;
  
  constructor() { }

  DoLogin(objeto: Login): Observable<ResponseJwt> {
    return this.http.post<ResponseJwt>(`${this.baseUrl}Auth/Login`, objeto)
  }  

  validateToken(token:string): Observable<any> {
    if (!token) {
      return new Observable(observer => {
        observer.error('No token found');
      });
    }

    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    
    return this.http.get(`${this.baseUrl}Auth/validate`, { headers });
  }
}
