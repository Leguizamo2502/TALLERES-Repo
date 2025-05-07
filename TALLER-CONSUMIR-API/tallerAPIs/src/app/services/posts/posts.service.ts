import { Injectable } from '@angular/core';
import { ApiJSONService } from '../apiJSON/api-json.service';
import { ApiJsonModel } from '../../models/apiJson/apiJson.model';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PostsService extends ApiJSONService<ApiJsonModel>{

  constructor(http:HttpClient) {
    super(http,`${environment.apiJSON}/posts`);
   }
}
