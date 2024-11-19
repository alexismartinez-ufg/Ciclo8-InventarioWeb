import { Component } from '@angular/core';
import { ClientService } from '../../services/client.service';
import { client } from '../../interfaces/client';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-client',
  standalone: true,
  imports: [FormsModule, HttpClientModule, CommonModule],
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent {
  client: client = {
    idClient: 0,
    clientName: '',
    clientPhone: '',
    clientComplementAddress: '',
    idDistrict: 0
  };

  clients: client[] = []; // Lista de clientes
  isEditMode: boolean = false; // Variable para controlar el modo de edición

  constructor(private clientService: ClientService) {}

  ngOnInit(): void {
    this.loadClients(); // Cargar clientes al iniciar el componente
  }

  // Función para registrar un cliente
  registerClient() {
    this.clientService.createClient(this.client).subscribe(
      (response: client) => {
        console.log('Client registered successfully:', response);
        this.loadClients(); // Recargar la lista de clientes después de registrar
      },
      (error) => {
        console.error('Error registering client:', error);
      }
    );
  }

  // Función para cargar todos los clientes
  loadClients() {
    this.clientService.getClients().subscribe(
      (data: client[]) => {
        this.clients = data;
        console.log('Clients loaded successfully:', data);
      },
      error => {
        console.error('Error loading clients:', error);
      }
    );
  }

  // Función para cargar los datos del cliente a editar en el formulario
  editClient(id: number) {
    const clientToEdit = this.clients.find(client => client.idClient === id);
    if (clientToEdit) {
      this.client = { ...clientToEdit }; // Copia los datos al formulario
      this.isEditMode = true; // Cambia a modo edición
    }
  }

  // Función para actualizar un cliente
  updateClient() {
    this.clientService.updateClient(this.client.idClient, this.client).subscribe(
      (response: client) => {
        console.log('Client updated successfully:', response);
        this.loadClients();
        this.resetForm(); // Limpiar el formulario después de actualizar
      },
      (error) => {
        console.error('Error updating client:', error);
      }
    );
  }

  deleteClient(id: number) {
    if (confirm('Are you sure you want to delete this client?')) {
      this.clientService.deleteClient(id).subscribe(
        () => {
          console.log('Client deleted successfully');
          this.loadClients(); // Recargar la lista después de eliminar
        },
        (error) => {
          console.error('Error deleting client:', error);
        }
      );
    }
  }

 // Resetear el formulario
 resetForm() {
  this.client = {
    idClient: 0,
    clientName: '',
    clientPhone: '',
    clientComplementAddress: '',
    idDistrict: 0
  };
}

}
