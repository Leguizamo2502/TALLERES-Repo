import { Injectable } from '@angular/core';
import { ApiJSONService } from '../apiJSON/api-json.service';
import { CommentModel } from '../../models/comments/comments.model';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CommentsService extends ApiJSONService<CommentModel>{

  constructor(http:HttpClient) {
    super(http, `${environment.apiJSON}/comments`);
   }
}
