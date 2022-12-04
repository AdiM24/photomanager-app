import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class PhotoUploaderService {
  allowedList = ['png', 'jpeg', 'jpg', 'png', 'gif']
  constructor(private http: HttpClient) {}

  upload(file: File) {
    const formData: FormData = new FormData();

    formData.append('image', file);

    return this.http.post(`http://localhost:3000/photo-manager`, formData, {
      reportProgress: true,
      responseType: 'json',
    });
  }
}
