import { Component, inject, OnInit } from '@angular/core';
import { PhotosService } from '../../../services/photos/photos.service';
import { PhotoModel } from '../../../models/photos/photos.model';
import { MatButton } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { RouterLink } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-indice-photos',
  imports: [MatTableModule, MatButton, RouterLink],
  templateUrl: './indice-photos.component.html',
  styleUrl: './indice-photos.component.css',
})
export class IndicePhotosComponent implements OnInit {
  servicio = inject(PhotosService);
  photos: PhotoModel[] = [];

  loadData() {
    Swal.fire({
      title: 'Cargando...',
      text: 'Espere mientras se cargan los comentarios',
      allowOutsideClick: false,
      didOpen: () => {
        Swal.showLoading();
      },
    });

    this.servicio.getAll().subscribe((data) => {
      this.photos = data;
      // console.log(this.photos);
      Swal.close();
    });
  }

  ngOnInit(): void {
    this.loadData();
  }

  displayedColumns: string[] = ['count','albumId', 'title','url', 'actions'];


  delete(id: number) {
    this.servicio.delete(id).subscribe({
      next: () => {
        Swal.fire({
          icon: 'success',
          title: 'Borrado correctamente!',
          text: 'El registro se ha borrado correctamente.',
        }).then(() => {
          this.loadData(); // Recargar los datos después de guardar
        });
      },
      error: (error) => {
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'Ocurrió un error al borrar el registro.',
        });
        console.error(error);
      },
    });
  }
}
