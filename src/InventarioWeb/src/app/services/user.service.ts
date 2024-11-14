import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { appsettings } from '../settings/appsettings';
import { UserCreate } from '../interfaces/UserCreate';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private http = inject(HttpClient);
  private baseUrl:string = appsettings.apiUrl;
  
  constructor() { }
  
  Create(objeto: UserCreate): Observable<any> {
    return this.http.post(`${this.baseUrl}User`, objeto)
  }
}
