import { Component, inject } from '@angular/core';
import { LoginService } from '../../services/login.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms'
import { Login } from '../../interfaces/Login';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  private loginService = inject(LoginService);
  private router = inject(Router);
  public formBuild = inject(FormBuilder)

  public formLogin: FormGroup = this.formBuild.group({
    username: ['', Validators.required],
    password: ['', Validators.required]
  });

  IniciarSesion() {
    if (this.formLogin.invalid) return;

    const objeto: Login = {
      username: this.formLogin.value.username,
      password: this.formLogin.value.password
    }

    this.loginService.DoLogin(objeto).subscribe({
      next: (data) => {
        console.log(data);
        localStorage.setItem('jwt', data.token);
        this.router.navigate(['brand']);
      },
      error: (err) => {

        let errorMessage = 'Hubo un error al procesar tu solicitud. Intenta nuevamente.';
        if (err.status === 401) {
          errorMessage = 'Credenciales inválidas.';
        } else if (err.error && err.error.title) {
          errorMessage = err.error.title;
        }

        Swal.fire({
          icon: 'error',
          title: 'Error al iniciar sesión',
          text: errorMessage,
          confirmButtonText: 'Aceptar'
        });
      },
    });
  }

  Registro() {
    this.router.navigate(['registro']);
  }

}
