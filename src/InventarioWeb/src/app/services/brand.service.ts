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
}
