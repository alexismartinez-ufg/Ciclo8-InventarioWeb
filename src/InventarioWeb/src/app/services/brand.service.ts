import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { appsettings } from '../settings/appsettings';
import { Observable } from 'rxjs';
import { Brand } from '../interfaces/Brand';

@Injectable({
  providedIn: 'root'
})
export class BrandService {

  private http = inject(HttpClient);
  private baseUrl:string = appsettings.apiUrl;

  constructor() { }

  Get(): Observable<Brand[]> {
    return this.http.get<Brand[]>(`${this.baseUrl}Brand`, {withCredentials: true});
  }

  Post(form:any):Observable<Brand> {
    return this.http.post<Brand>(`${this.baseUrl}Brand`,form, {withCredentials: true});
  }

  Put(form:any):Observable<Brand> {
    return this.http.put<Brand>(`${this.baseUrl}Brand`,form, {withCredentials: true});
  }

  Delete(idnumer:any):Observable<any> {
    console.log(idnumer)
    return this.http.delete<any>(`${this.baseUrl}Brand/${idnumer}`, {withCredentials: true});
  }
}
