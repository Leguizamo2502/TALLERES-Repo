import { Injectable } from '@angular/core';
import { ApiJSONService } from '../apiJSON/api-json.service';
import { PhotoModel } from '../../models/photos/photos.model';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PhotosService extends ApiJSONService<PhotoModel> {
  constructor(http: HttpClient) {
    super(http, `${environment.apiJSON}/photos`);
  }

  override getAll(): Observable<PhotoModel[]> {
    return super.getAll().pipe(map((photos) => photos.slice(0, 100)));
  }
}
