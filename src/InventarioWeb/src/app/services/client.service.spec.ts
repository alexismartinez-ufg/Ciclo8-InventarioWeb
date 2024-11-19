import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  private apiUrl = 'https://localhost:7252/api/client'; // Cambia la URL según tu configuración

  constructor(private http: HttpClient) {}

  createClient(client: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}`, client);
  }
}
