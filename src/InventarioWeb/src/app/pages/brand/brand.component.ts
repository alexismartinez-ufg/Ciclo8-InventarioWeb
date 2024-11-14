import { Component, inject, Inject } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import {MatTableModule} from '@angular/material/table';
import { BrandService } from '../../services/brand.service';
import { Brand } from '../../interfaces/Brand';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-brand',
  standalone: true,
  imports: [MatCardModule,MatTableModule],
  templateUrl: './brand.component.html',
  styleUrl: './brand.component.css'
})
export class BrandComponent {

  private brandService = inject(BrandService);
  public listBrand:Brand[]=[];
  public displayedColumns:string[]=[
    "idBrand","brandName","brandCountry","brandStatus"
  ];

  constructor(){
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
}
