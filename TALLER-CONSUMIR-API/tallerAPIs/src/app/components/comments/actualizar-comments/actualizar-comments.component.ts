import {
  Component,
  inject,
  Input,
  numberAttribute,
  OnInit,
} from '@angular/core';
import { CommentsService } from '../../../services/comments/comments.service';
import { Router } from '@angular/router';
import { CommentModel } from '../../../models/comments/comments.model';
import { FormCommentsComponent } from '../form-comments/form-comments.component';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-actualizar-comments',
  imports: [FormCommentsComponent],
  templateUrl: './actualizar-comments.component.html',
  styleUrl: './actualizar-comments.component.css',
})
export class ActualizarCommentsComponent implements OnInit {
  @Input({ transform: numberAttribute })
  id!: number;

  servicio = inject(CommentsService);
  router = inject(Router);

  modelo?: CommentModel;

  ngOnInit(): void {
    this.servicio.getById(this.id).subscribe((data) => {
      this.modelo = data;
    });
  }

  guardar(entity: CommentModel) {
    this.servicio.update(this.id, entity).subscribe({
      next: () => {
        Swal.fire({
          icon: 'success',
          title: 'Actualizado con exito!',
          text: 'Se ha actualizado correctamente.',
        }).then(() => {
          this.router.navigate(['comments']);
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
  // guardar(entity:CommentModel){
  //   this.servicio.update(this.id,entity).subscribe(()=>{
  //     this.router.navigate(['comments']);
  //   })
  // }
}
