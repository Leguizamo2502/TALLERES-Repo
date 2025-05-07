import { Component, inject } from '@angular/core';
import { PhotosService } from '../../../services/photos/photos.service';
import { Router } from '@angular/router';
import { PhotoModel } from '../../../models/photos/photos.model';
import Swal from 'sweetalert2';
import { FormPhotosComponent } from "../form-photos/form-photos.component";

@Component({
  selector: 'app-crear-photos',
  imports: [FormPhotosComponent],
  templateUrl: './crear-photos.component.html',
  styleUrl: './crear-photos.component.css',
})
export class CrearPhotosComponent {
  servicio = inject(PhotosService);
  router = inject(Router);

  guardar(entity: PhotoModel) {
    this.servicio.create(entity).subscribe({
      next: () => {
        Swal.fire({
          icon: 'success',
          title: '¡Guardado!',
          text: 'El registro se ha guardado correctamente.',
        }).then(() => {
          this.router.navigate(['photos']);
        });
      },
      error: (error) => {
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'Ocurrió un error al guardar el registro.',
        });
        console.error(error);
      },
    });
  }
}
