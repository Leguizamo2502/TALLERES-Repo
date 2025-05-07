import { Component, inject } from '@angular/core';
import { FormCommentsComponent } from '../form-comments/form-comments.component';
import { CommentsService } from '../../../services/comments/comments.service';
import { Router } from '@angular/router';
import { CommentModel } from '../../../models/comments/comments.model';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-crear-comments',
  imports: [FormCommentsComponent],
  templateUrl: './crear-comments.component.html',
  styleUrl: './crear-comments.component.css',
})
export class CrearCommentsComponent {
  servicio = inject(CommentsService);
  router = inject(Router);

  guardar(entity: CommentModel) {
    this.servicio.create(entity).subscribe({
      next: () => {
        Swal.fire({
          icon: 'success',
          title: '¡Guardado!',
          text: 'El registro se ha guardado correctamente.',
        }).then(() => {
          this.router.navigate(['comments']);
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
  // guardar(entity:CommentModel){
  //   this.servicio.create(entity).subscribe(()=>{
  //     this.router.navigate(['comments']);

  //   })
  // }
}
