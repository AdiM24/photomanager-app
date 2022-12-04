import { Component } from '@angular/core';
import { HttpEventType, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PhotoUploaderService } from '../services/photo-uploader.service';

@Component({
  selector: 'app-photo-uploader',
  templateUrl: './photo-uploader.component.html',
  styleUrls: ['./photo-uploader.component.css'],
})
export class PhotoUploaderComponent {
  allowedList = ['png', 'jpeg', 'jpg', 'png', 'gif'];

  selectedPhotos?: FileList;
  progressInfo: any[] = [];
  message: string[] = [];

  previews: string[] = [];
  imageInfos?: Observable<any>;

  constructor(private photoUploadService: PhotoUploaderService) {}

  selectPhotos(event: any): void {
    this.message = [];
    this.progressInfo = [];
    this.selectedPhotos = event.target.files;

    this.previews = [];
    if (this.selectedPhotos && this.selectedPhotos[0]) {
      const numberOfFiles = this.selectedPhotos.length;
      for (let i = 0; i < numberOfFiles; i++) {
        const reader = new FileReader();

        reader.onload = (e: any) => {
          this.previews.push(e.target.result);
        };

        reader.readAsDataURL(this.selectedPhotos[i]);
      }
    }
  }

  uploadPhotos(): void {
    if (this.selectedPhotos) {
      for (let i = 0; i < this.selectedPhotos.length; i++) {
        if (
          !this.allowedList.includes(this.selectedPhotos[i].name.split('.')[1])
        ) {
          return;
        }
        this.upload(i, this.selectedPhotos[i]);
      }
    }
  }

  upload(idx: number, file: File): void {
    this.progressInfo[idx] = { value: 0, fileName: file.name };

    if (file) {
      this.photoUploadService.upload(file).subscribe({
        next: (event: any) => {
          if (event.type === HttpEventType.UploadProgress) {
            this.progressInfo[idx].value = Math.round(
              (100 * event.loaded) / event.total
            );
          } else if (event instanceof HttpResponse) {
            const msg = 'Uploaded the file successfully: ' + file.name;
            this.message.push(msg);
            // this.imageInfos = this.photoUploadService.getFiles();
          }
        },
        error: (err: any) => {
          this.progressInfo[idx].value = 0;
          const msg = 'Could not upload the file: ' + file.name;
          this.message.push(msg);
        },
      });
    }
  }
}
