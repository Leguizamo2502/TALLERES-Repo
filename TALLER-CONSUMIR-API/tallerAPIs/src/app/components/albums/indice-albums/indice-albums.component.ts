import { Component, inject, OnInit } from '@angular/core';
import { AlbumsService } from '../../../services/albums/albums.service';
import { AlbumModel } from '../../../models/albums/albums.model';
import Swal from 'sweetalert2';
import { MatButton } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-indice-albums',
  imports: [MatTableModule,MatButton,RouterLink],
  templateUrl: './indice-albums.component.html',
  styleUrl: './indice-albums.component.css',
})
export class IndiceAlbumsComponent implements OnInit {
  servicio = inject(AlbumsService);
  albums: AlbumModel[] = [];

  loadData() {
    Swal.fire({
      title: 'Cargando...',
      text: 'Espere mientras se cargan los álbumes',
      allowOutsideClick: false,
      didOpen: () => {
        Swal.showLoading();
      },
    });

    this.servicio.getAll().subscribe((data)=>{
      this.albums = data;
      // console.log(this.albums);
      Swal.close();
    })
  }

  ngOnInit(): void {
    this.loadData();
  }

  displayedColumns: string[] = ['count','userId', 'title','actions'];

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
