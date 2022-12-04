import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-tag-update-dialog',
  templateUrl: './tag-update-dialog.component.html',
  styleUrls: ['./tag-update-dialog.component.css'],
})
export class TagUpdateDialogComponent {
  tags: string[] = [];
  constructor(
    public dialogRef: MatDialogRef<TagUpdateDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  handleInputValueChange(event: any): void {
    const { name, value } = event.target;

    this.tags = value.split(' ');
  }

  sendTags() {
    return this.tags;
  }
}
