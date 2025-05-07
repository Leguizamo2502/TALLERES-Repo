import { Component, EventEmitter, inject, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { PhotoModel } from '../../../models/photos/photos.model';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-form-photos',
  imports: [ReactiveFormsModule, MatFormFieldModule, MatInputModule, MatButtonModule, RouterLink],
  templateUrl: './form-photos.component.html',
  styleUrl: './form-photos.component.css'
})
export class FormPhotosComponent implements OnInit{

  formBuilder = inject(FormBuilder);

  @Input()
  titulo!:string;

  @Input()
  modelo?:PhotoModel;

  @Output()
  posteoFormulario = new EventEmitter<PhotoModel>();

  form = this.formBuilder.group({
    albumId:[1],
    title:['',Validators.required],
    url:['',Validators.required],
    thumbnailUrl:['',Validators.required]
  })

  ngOnInit(): void {
    if(this.modelo!== undefined){
      this.form.patchValue(this.modelo);
    }
  }

  public guardar(){
    if(this.form.valid){
      let data = this.form.value as PhotoModel;
      this.posteoFormulario.emit(data);
    }else{
      this.form.markAllAsTouched();
    }
  }

}
