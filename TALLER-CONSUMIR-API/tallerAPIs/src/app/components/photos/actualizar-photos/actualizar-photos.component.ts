import {
  Component,
  inject,
  Input,
  numberAttribute,
  OnInit,
} from '@angular/core';
import { PhotosService } from '../../../services/photos/photos.service';
import { FormPhotosComponent } from '../form-photos/form-photos.component';
import { Router } from '@angular/router';
import { PhotoModel } from '../../../models/photos/photos.model';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-actualizar-photos',
  imports: [FormPhotosComponent],
  templateUrl: './actualizar-photos.component.html',
  styleUrl: './actualizar-photos.component.css',
})
export class ActualizarPhotosComponent implements OnInit {
  @Input({ transform: numberAttribute })
  id!: number;

  servicio = inject(PhotosService);
  router = inject(Router);

  modelo?: PhotoModel;

  ngOnInit(): void {
    this.servicio.getById(this.id).subscribe((data) => {
      this.modelo = data;
    });
  }

  guardar(entity: PhotoModel) {
    this.servicio.update(this.id, entity).subscribe({
      next: () => {
        Swal.fire({
          icon: 'success',
          title: 'Actualizado con exito!',
          text: 'Se ha actualizado correctamente.',
        }).then(() => {
          this.router.navigate(['photos']);
        });
      },
      error: (error) => {
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'Ocurrió un error al Actualizar.',
        });
        console.error(error);
      },
    });
  }
}
