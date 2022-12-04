import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { PhotoModel } from '../models/photo-model';
import { PhotoListService } from '../services/photo-list.service';
import { MatDialog } from '@angular/material/dialog';
import { TagUpdateDialogComponent } from '../tag-update-dialog/tag-update-dialog.component';

@Component({
  selector: 'app-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.css'],
})
export class PhotoListComponent implements OnInit {
  photoList: PhotoModel[] = [];
  displayedColumns: string[] = ['thumb', 'name', 'tags', 'createdAt', 'action'];

  constructor(
    private readonly photoListService: PhotoListService,
    private readonly sanitizer: DomSanitizer,
    public dialog: MatDialog
  ) {}

  ngOnInit() {
    this.photoListService.getPhotos().subscribe({
      next: (res) => {
        res.forEach((resItem: PhotoModel) => {
          resItem.createdAt = new Date(resItem.createdAt).toLocaleString();

          this.photoList.push(resItem);
        });

        this.getImageThumbs();
      },
      error: (err) => {
        console.error(err);
      },
    });
  }

  updateTags(row: PhotoModel) {
    const tagsClone = [...row.tags];
    const systemTag = tagsClone[0];

    tagsClone.shift();

    const dialogRef = this.dialog.open(TagUpdateDialogComponent, {
      data: {
        systemTags: systemTag,
        tags: tagsClone.toString(),
        name: row.name,
      },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        const itemToSend = { ...row };

        itemToSend.tags = [systemTag, ...result];

        this.photoListService.updateTags(itemToSend).subscribe({
          next: (res) => {
            const tempPhotoList: PhotoModel[] = [];
            this.photoListService.getPhotos().subscribe({
              next: (res) => {
                res.forEach((resItem: PhotoModel) => {
                  resItem.createdAt = new Date(
                    resItem.createdAt
                  ).toLocaleString();

                  tempPhotoList.push(resItem);
                });
                this.photoList = tempPhotoList;
                this.getImageThumbs();
              },
              error: (err) => {
                console.error(err);
              },
            });
          },
          error: (err) => {
            console.error('Could not perform update');
          },
        });
      }
    });
  }

  getImageThumbs() {
    this.photoList.forEach((photo) => {
      this.photoListService.getPhoto(photo.photoId).subscribe({
        next: (res) => {
          photo.thumb = this.sanitizer.bypassSecurityTrustUrl(
            URL.createObjectURL(res)
          );
        },
      });
    });
  }

  removeImage(photo: PhotoModel) {
    this.photoListService.removeImage(photo.photoId).subscribe({
      next: () => {
        const tempPhotoList: PhotoModel[] = [];
        this.photoListService.getPhotos().subscribe({
          next: (res) => {
            res.forEach((resItem: PhotoModel) => {
              resItem.createdAt = new Date(resItem.createdAt).toLocaleString();

              tempPhotoList.push(resItem);
            });
            this.photoList = tempPhotoList;
            this.getImageThumbs();
          },
          error: (err) => {
            console.error(err);
          },
        });
      },
    });
  }
}
