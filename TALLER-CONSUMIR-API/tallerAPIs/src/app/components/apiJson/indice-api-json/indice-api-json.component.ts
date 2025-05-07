import { Component, inject, OnInit } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { ApiJsonModel } from '../../../models/apiJson/apiJson.model';
import { RouterLink } from '@angular/router';
import { PostsService } from '../../../services/posts/posts.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-indice-api-json',
  imports: [MatTableModule, MatButton, RouterLink],
  templateUrl: './indice-api-json.component.html',
  styleUrl: './indice-api-json.component.css',
})
export class IndiceApiJsonComponent implements OnInit {
  servicio = inject(PostsService);
  apiJson: ApiJsonModel[] = [];

  ngOnInit(): void {
    this.loadData();
  }

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
      this.apiJson = data;
      // console.log(this.apiJson);
      Swal.close();
    });
  }
  displayedColumns: string[] = ['count', 'title', 'body', 'actions'];

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
  // delete(id: number) {
  //   this.servicio.delete(id).subscribe(() => {
  //     this.loadData();
  //   });
  // }
}
