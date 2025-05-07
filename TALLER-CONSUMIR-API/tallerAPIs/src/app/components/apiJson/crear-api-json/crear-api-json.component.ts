import { Component, inject } from '@angular/core';
import { FormApiJsonComponent } from '../form-api-json/form-api-json.component';
import { Router } from '@angular/router';

import { ApiJsonModel } from '../../../models/apiJson/apiJson.model';
import { PostsService } from '../../../services/posts/posts.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-crear-api-json',
  imports: [FormApiJsonComponent],
  templateUrl: './crear-api-json.component.html',
  styleUrl: './crear-api-json.component.css'
})
export class CrearApiJsonComponent {
  router = inject(Router);
  servicio = inject(PostsService);

  guardar(entity:ApiJsonModel){
    this.servicio.create(entity).subscribe({
      next: () => {
        Swal.fire({
          icon: 'success',
          title: '¡Guardado!',
          text: 'El registro se ha guardado correctamente.'
        }).then(() => {
          this.router.navigate(['apiJson']);
        });
      },
      error: (error) => {
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'Ocurrió un error al guardar el registro.'
        });
        console.error(error);
      }
    })
  }
  // guardar(entity:ApiJsonModel){
  //   this.servicio.create(entity).subscribe(()=>{
  //     this.router.navigate(['apiJson']);
  //   })
  // }

}
