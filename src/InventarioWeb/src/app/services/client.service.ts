import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { client } from '../interfaces/client';

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  private apiUrl = 'https://localhost:7252/api/client'; // URL base de la API

  constructor(private http: HttpClient) {}

  createClient(client: client): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}`, client);
  }

  // Nuevo método para obtener clientes
  getClients(): Observable<client[]> {
    return this.http.get<client[]>(`${this.apiUrl}`);
  }

  updateClient(id: number, client: client): Observable<client> {
    return this.http.put<client>(`https://localhost:7252/api/client/${id}`, client);
  }
  // Función para eliminar un cliente
  deleteClient(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${id}`);
  }
}
