import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Component, EventEmitter, inject, Inject, Input, OnInit, Output } from '@angular/core';
import { CommentModel } from '../../../models/comments/comments.model';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-form-comments',
  imports: [ReactiveFormsModule, MatFormFieldModule, MatInputModule, MatButtonModule, RouterLink],
  templateUrl: './form-comments.component.html',
  styleUrl: './form-comments.component.css'
})
export class FormCommentsComponent implements OnInit{

  // formBuilder = Inject(FormBuilder);
  formBuilder = inject(FormBuilder)

  @Input({required: true})
  titulo!: string;

  @Input()
  modelo?: CommentModel;

  @Output()
  posteoFormulario = new EventEmitter<CommentModel>();

  form = this.formBuilder.group({
    postId: [1],
    name: ['',[Validators.required]],
    email: ['',[Validators.required]],
    body: ['',[Validators.required]]
  })

  ngOnInit(): void {
    if(this.modelo !== undefined){
      this.form.patchValue(this.modelo);
    }
  }

  public guardar(){
    if(this.form.valid){
      let data = this.form.value as CommentModel;
      this.posteoFormulario.emit(data);
    }else{
      this.form.markAllAsTouched();
    }
  }

 

}
