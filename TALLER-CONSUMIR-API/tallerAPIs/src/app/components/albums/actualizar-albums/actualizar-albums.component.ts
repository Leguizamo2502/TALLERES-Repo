import {
  Component,
  inject,
  Input,
  numberAttribute,
  OnInit,
} from '@angular/core';
import { AlbumsService } from '../../../services/albums/albums.service';
import { AlbumModel } from '../../../models/albums/albums.model';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { FormAlbulmsComponent } from '../form-albulms/form-albulms.component';

@Component({
  selector: 'app-actualizar-albums',
  imports: [FormAlbulmsComponent],
  templateUrl: './actualizar-albums.component.html',
  styleUrl: './actualizar-albums.component.css',
})
export class ActualizarAlbumsComponent implements OnInit {
  @Input({ transform: numberAttribute })
  id!: number;

  servicio = inject(AlbumsService);
  router = inject(Router);

  modelo?: AlbumModel;

  ngOnInit(): void {
    this.servicio.getById(this.id).subscribe((data) => {
      this.modelo = data;
    });
  }

  guardar(entity: AlbumModel) {
    this.servicio.update(this.id, entity).subscribe({
      next: () => {
        Swal.fire({
          icon: 'success',
          title: 'Actualizado con exito!',
          text: 'Se ha actualizado correctamente.',
        }).then(() => {
          this.router.navigate(['albums']);
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
