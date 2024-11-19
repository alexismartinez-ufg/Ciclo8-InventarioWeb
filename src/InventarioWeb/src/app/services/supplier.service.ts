import { inject, Injectable } from '@angular/core';
import { appsettings } from '../settings/appsettings';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Supplier } from '../interfaces/Supplier';

@Injectable({
  providedIn: 'root'
})
export class SupplierService {

  private http = inject(HttpClient);
  private baseUrl:string = appsettings.apiUrl;

  constructor() { }

  Get(): Observable<Supplier[]> {
    return this.http.get<Supplier[]>(`${this.baseUrl}Supplier`, {withCredentials: true});
  }
}
