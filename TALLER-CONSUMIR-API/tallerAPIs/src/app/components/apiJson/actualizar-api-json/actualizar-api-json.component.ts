import { Component, inject, Input, numberAttribute, OnInit } from '@angular/core';
import { ApiJSONService } from '../../../services/apiJSON/api-json.service';
import { Router } from '@angular/router';
import { ApiJsonModel } from '../../../models/apiJson/apiJson.model';
import { FormApiJsonComponent } from '../form-api-json/form-api-json.component';
import { PostsService } from '../../../services/posts/posts.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-actualizar-api-json',
  imports: [FormApiJsonComponent],
  templateUrl: './actualizar-api-json.component.html',
  styleUrl: './actualizar-api-json.component.css'
})
export class ActualizarApiJsonComponent implements OnInit{
  @Input({transform:numberAttribute})
  id!: number;

  servicio = inject(PostsService);
  router = inject(Router);

  modelo?: ApiJsonModel;

  ngOnInit(): void {
    this.servicio.getById(this.id).subscribe((data)=>{
      this.modelo = data;

    })
  }

  guardar(entity:ApiJsonModel){
    this.servicio.update(this.id, entity).subscribe({
      next: () => {
              Swal.fire({
                icon: 'success',
                title: '¡Actualizado con exito!',
                text: 'Se ha actualizo correctamente.'
              }).then(() => {
                this.router.navigate(['apiJson']);
              });
            },
            error: (error) => {
              Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'Ocurrió un error al Actualizar.'
              });
              console.error(error);
            }
    })
  }
  // guardar(entity:ApiJsonModel){
  //   this.servicio.update(this.id, entity).subscribe(()=>{
  //     this.router.navigate(['apiJson']);

  //   })
  // }

}
