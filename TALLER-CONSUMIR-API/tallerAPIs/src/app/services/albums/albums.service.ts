import { Injectable } from '@angular/core';
import { ApiJSONService } from '../apiJSON/api-json.service';
import { AlbumModel } from '../../models/albums/albums.model';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AlbumsService extends ApiJSONService<AlbumModel>{

  constructor(http:HttpClient) {
    super(http, `${environment.apiJSON}/albums`);
   }
}
