import { Component, inject } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';
import { UserCreate } from '../../interfaces/UserCreate';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-registro',
  standalone: true,
  imports: [MatCardModule, MatFormFieldModule, MatInputModule, MatButtonModule, ReactiveFormsModule],
  templateUrl: './registro.component.html',
  styleUrl: './registro.component.css'
})
export class RegistroComponent {

  private userService = inject(UserService);
  private router = inject(Router);
  public formBuild = inject(FormBuilder)

  public formRegister: FormGroup = this.formBuild.group({
    username: ['', Validators.required],
    password: ['', Validators.required],
    nameuser: ['', Validators.required],
    email: ['', Validators.required],
  });

  Registrar() {
    if (this.formRegister.invalid) return;

    const objeto: UserCreate = {
      username: this.formRegister.value.username,
      password: this.formRegister.value.password,
      nameuser: this.formRegister.value.nameuser,
      email: this.formRegister.value.email
    }

    this.userService.Create(objeto).subscribe({
      next: (data) => {
        console.log(data);
        this.router.navigate(['']);
      },
      error: (err) => {

        let errorMessage = 'Hubo un error al procesar tu solicitud. Intenta nuevamente.';
        if (err.status === 404) {
          errorMessage = 'Ocurrio un problema.';
        } else if (err.error && err.error.title) {
          errorMessage = err.error.title;
        }

        Swal.fire({
          icon: 'error',
          title: 'Error al registrarse',
          text: errorMessage,
          confirmButtonText: 'Aceptar'
        });
      },
    });
  }

  Login() {
    this.router.navigate(['']);
  }
  
}
