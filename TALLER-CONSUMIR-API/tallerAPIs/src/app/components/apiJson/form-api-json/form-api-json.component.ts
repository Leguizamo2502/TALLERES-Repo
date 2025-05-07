import { Component, EventEmitter, inject, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { ApiJsonModel } from '../../../models/apiJson/apiJson.model';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink } from '@angular/router';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

@Component({
  selector: 'app-form-api-json',
  imports: [ReactiveFormsModule, MatFormFieldModule, MatInputModule, MatButtonModule, RouterLink],
  templateUrl: './form-api-json.component.html',
  styleUrl: './form-api-json.component.css'
})
export class FormApiJsonComponent implements OnInit{
  
  formBuilder = inject(FormBuilder);

  @Input({required: true})
  titulo!: string;

  @Input() 
  modelo?:ApiJsonModel;

  @Output()
  posteoFormulario = new EventEmitter<ApiJsonModel>();


  form = this.formBuilder.group({
    title: ['',[Validators.required]],
    body: ['',[Validators.required]]
  })
  
  ngOnInit(): void {
    if(this.modelo !== undefined){
      this.form.patchValue(this.modelo);
    }
  }


  public guardar(){
    if(this.form.valid){
      let data = this.form.value as ApiJsonModel;
      this.posteoFormulario.emit(data);
    }else{
      this.form.markAllAsTouched();

    }

  }
  
}
