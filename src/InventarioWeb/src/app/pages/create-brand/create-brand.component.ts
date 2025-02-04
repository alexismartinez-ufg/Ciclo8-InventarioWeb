import { Component, inject,Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Brand } from '../../interfaces/Brand';
import { SupplierService } from '../../services/supplier.service';
import { Supplier } from '../../interfaces/Supplier';
import Swal from 'sweetalert2';
import { BrandService } from '../../services/brand.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-create-brand',
  templateUrl: './create-brand.component.html',
  styleUrl: './create-brand.component.css'
})
export class CreateBrandComponent {
  @Input() brand: Brand | null = null;
  miFormulario: FormGroup;
  private supplierService = inject(SupplierService);
  private brandService = inject(BrandService);
  public listProveedores :Supplier[] | null = null;

  constructor(private fb: FormBuilder, private router: Router,private route: ActivatedRoute) {
    this.miFormulario = this.fb.group({
      IdBrand: [0], // Puedes asignar un valor inicial si lo necesitas
      IdSupplier: [0, Validators.required],
      BrandName: ['', Validators.required],
      BrandStatus: [true], // Puedes asignar un valor inicial si lo necesitas
      BrandCountry: ['', Validators.required]
    });

    this.route.paramMap.subscribe(params => {
      this.miFormulario.setValue({
        IdBrand:params.get('idBrand'),
        IdSupplier:params.get('idSupplier'),
        BrandName:params.get('brandName'),
        BrandStatus:params.get('brandStatus'),
        BrandCountry:params.get('brandCountry')
      });
    });

    this.supplierService.Get().subscribe({
      next: (data) => {
        console.log(data);
        if(data.length > 0){
          this.listProveedores = data
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

  enviarFormulario() {
    if (this.miFormulario.valid) {

      if(this.miFormulario.value.IdBrand !='0'){
        const obj = {
          "IdBrand": parseInt(this.miFormulario.value.IdBrand),
          "IdSupplier": parseInt(this.miFormulario.value.IdSupplier),
          "BrandName": this.miFormulario.value.BrandName,
          "BrandStatus": new Boolean(this.miFormulario.value.brandStatus),
          "BrandCountry": this.miFormulario.value.BrandCountry
        }
      console.log(obj)

        this.brandService.Put(obj).subscribe({
          next: (data:any) => {
            console.log(data);
            this.router.navigate(['/brand'])
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
        return;
      }

      this.brandService.Post(this.miFormulario.value).subscribe({
        next: (data:any) => {
          console.log(data);
          this.router.navigate(['/brand'])
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
  }
}
