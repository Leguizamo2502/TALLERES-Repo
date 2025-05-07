import { Component, EventEmitter, inject, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { AlbumModel } from '../../../models/albums/albums.model';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-form-albulms',
  imports: [ReactiveFormsModule, MatFormFieldModule, MatInputModule, MatButtonModule, RouterLink],
  templateUrl: './form-albulms.component.html',
  styleUrl: './form-albulms.component.css'
})
export class FormAlbulmsComponent implements OnInit{

  formBuilder = inject(FormBuilder);

  @Input({required: true})
  titulo!: string;

  @Input()
  modelo?: AlbumModel;

  @Output()
  posteoFormulario = new EventEmitter<AlbumModel>();

  form = this.formBuilder.group({
    userId:[1],
    title:['',[Validators.required]]

  })

  ngOnInit(): void {
    if(this.modelo !==undefined){
      this.form.patchValue(this.modelo);

    }
  }

  guardar(){
    if(this.form.valid){
      let data = this.form.value as AlbumModel;
      this.posteoFormulario.emit(data);
    }else{
      this.form.markAllAsTouched();
    }
  }

}
