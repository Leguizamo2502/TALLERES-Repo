import { Component, inject, OnInit } from '@angular/core';
import { CommentsService } from '../../../services/comments/comments.service';
import { CommentModel } from '../../../models/comments/comments.model';
import { MatButton } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { RouterLink } from '@angular/router';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-indice-comments',
  imports: [MatTableModule,MatButton,RouterLink],
  templateUrl: './indice-comments.component.html',
  styleUrl: './indice-comments.component.css'
})
export class IndiceCommentsComponent implements OnInit{
  servicio= inject(CommentsService);
  comments:CommentModel[]=[];

  // loading = true;


  loadData(){

    Swal.fire({
      title: 'Cargando...',
    text: 'Espere mientras se cargan los comentarios',
    allowOutsideClick: false,
    didOpen: () => {
      Swal.showLoading();
    }
    })


    this.servicio.getAll().subscribe((data=>{
      this.comments=data;
      // console.log(this.comments);
      // this.loading = false;
      Swal.close();
    }))
  }
  ngOnInit(): void {
    this.loadData();
  }
  displayedColumns: string[] = ['count','postsId', 'email','body', 'actions'];

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
