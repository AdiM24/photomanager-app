import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PhotomanagerRoutingModule } from './photomanager-routing.module';
import { PhotomanagerComponent } from './photomanager/photomanager.component';
import { PhotoUploaderComponent } from './photo-uploader/photo-uploader.component';
import { PhotoListComponent } from './photo-list/photo-list.component';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatDialogModule } from '@angular/material/dialog';
import { TagUpdateDialogComponent } from './tag-update-dialog/tag-update-dialog.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    PhotomanagerComponent,
    PhotoUploaderComponent,
    PhotoListComponent,
    TagUpdateDialogComponent,
  ],
  imports: [
    CommonModule,
    PhotomanagerRoutingModule,
    MatListModule,
    MatCardModule,
    MatTableModule,
    MatDialogModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule,
  ],
})
export class PhotomanagerModule {}
