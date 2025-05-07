import { Component, inject } from '@angular/core';
import { AlbumsService } from '../../../services/albums/albums.service';
import { Router } from '@angular/router';
import { AlbumModel } from '../../../models/albums/albums.model';
import Swal from 'sweetalert2';
import { FormAlbulmsComponent } from "../form-albulms/form-albulms.component";

@Component({
  selector: 'app-crear-almbums',
  imports: [FormAlbulmsComponent],
  templateUrl: './crear-almbums.component.html',
  styleUrl: './crear-almbums.component.css',
})
export class CrearAlmbumsComponent {
  servicio = inject(AlbumsService);
  router = inject(Router);

  guardar(entity: AlbumModel) {
    this.servicio.create(entity).subscribe({
      next: () => {
        Swal.fire({
          icon: 'success',
          title: '¡Guardado!',
          text: 'El registro se ha guardado correctamente.',
        }).then(() => {
          this.router.navigate(['albums']);
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
