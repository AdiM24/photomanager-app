import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PhotoModel } from '../models/photo-model';

@Injectable({
  providedIn: 'root',
})
export class PhotoListService {
  constructor(private readonly http: HttpClient) {}

  getPhotos(): Observable<any> {
    return this.http.get(`http://localhost:3000/photo-manager/list`);
  }

  getPhoto(id: string): Observable<any> {
    return this.http.get(`http://localhost:3000/photo-manager/${id}`, {
      responseType: 'blob',
    });
  }

  removeImage(id: string): Observable<any> {
    return this.http.delete(`http://localhost:3000/photo-manager/${id}`);
  }

  updateTags(itemToUpdate: PhotoModel): Observable<any> {
    return this.http.put(
      `http://localhost:3000/photo-manager/tags`,
      itemToUpdate
    );
  }
}
