import { Component, inject, Inject } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import {MatTableModule} from '@angular/material/table';
import { BrandService } from '../../services/brand.service';
import { Brand } from '../../interfaces/Brand';
import Swal from 'sweetalert2';
import { MatButtonModule } from '@angular/material/button';
import { Router } from '@angular/router';

@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrl: './brand.component.css'
})
export class BrandComponent {

  private brandService = inject(BrandService);
  public listBrand:Brand[]=[];
  displayedColumns: string[] = ['idBrand', 'brandName', 'brandCountry', 'brandStatus', 'acciones'];

  editarMarca(element: any) {
    this.router.navigate(['/create_brand', element]);
  }

  eliminarMarca(element: any) {
    this.brandService.Delete(element.idBrand).subscribe({
      next: (data:any) => {
       this.cargarBrands()
      },
      error: (err:any) => {

        let errorMessage = 'Hubo un error al procesar tu solicitud. Intenta nuevamente.';
        if (err.status === 400) {
          errorMessage = 'Sucedio un problema al obtener las Brands.';
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

  cargarBrands(){
    this.brandService.Get().subscribe({
      next: (data) => {
        console.log(data);
        if(data.length > 0){
          this.listBrand = data
        }
      },
      error: (err) => {

        let errorMessage = 'Hubo un error al procesar tu solicitud. Intenta nuevamente.';
        if (err.status === 400) {
          errorMessage = 'Sucedio un problema al obtener las Brands.';
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

  constructor(private router: Router){
    this.cargarBrands()
  }
}
