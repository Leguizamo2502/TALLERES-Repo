import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';


// @Injectable({
//   providedIn: 'root'
// })
export class ApiJSONService<T> {
  constructor(
    protected http: HttpClient,
    protected url: string 
  ) {}

  getAll():Observable<T[]>{
    return this.http.get<T[]>(`${this.url}`);
  }

  getById(id: number):Observable<T>{
    return this.http.get<T>(`${this.url}/${id}`);
  }

  create(data: T):Observable<T>{
    return this.http.post<T>(`${this.url}`, data);
  }

  update(id:number,data: T):Observable<T>{
    return this.http.put<T>(`${this.url}/${id}`, data);
  }
  delete(id: number):Observable<T>{
    return this.http.delete<T>(`${this.url}/${id}`);
  }
}

// export class genericService<T, TCreate> {
//   constructor(
//     protected http: HttpClient,
//     protected URLbase: string // Esto está bien como parámetro normal, sin inyección
//   ) {}

//   public getAll(): Observable<T[]> {
//     return this.http.get<T[]>(this.URLbase);
//   }

//   public getById(id: number): Observable<T> {
//     return this.http.get<T>(`${this.URLbase}/${id}`);
//   }

//   public create(entity: TCreate): Observable<T> {
//     return this.http.post<T>(this.URLbase, entity);
//   }

//   public update(id: number, entity: TCreate): Observable<T> {
//     return this.http.put<T>(`${this.URLbase}/${id}`, entity);
//   }

//   public delete(id: number): Observable<void> {
//     return this.http.delete<void>(`${this.URLbase}/${id}`);
//   }
